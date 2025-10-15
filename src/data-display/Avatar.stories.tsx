import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  AvatarGroup,
  AvatarOwnProps,
  Badge,
  styled,
} from "@mui/material";

const meta = {
  title: "DataDisplay/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  decorators: [],
  argTypes: {
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["circular", "rounded", "square"],
    },
  },
  args: {
    variant: "rounded",
    sx: {
      width: 60,
      height: 60,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (props: AvatarOwnProps) => {
    return <Avatar sx={{ width: 60, height: 60 }} {...props}></Avatar>;
  },
  args: {
    src: "/images/avatar/mascot-1.png",
  },
};

export const Fallback: Story = {
  render: (props: AvatarOwnProps) => {
    const name = "John Doe";

    return (
      <Avatar {...props} sx={{ width: 60, height: 60 }}>
        {name[0]}
      </Avatar>
    );
  },
  args: { src: "/images/avatar/mascot-1.pneg" },
  parameters: {
    controls: {
      exclude: ["sx"],
    },
  },
};

export const ColoredFallback: Story = {
  render: (props: AvatarOwnProps) => {
    const name = "John Doe";

    const stringToColor = (string: string) => {
      let hash = 0;
      let i;

      for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }

      let color = "#";

      for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
      }

      return color;
    };

    return (
      <Avatar
        {...props}
        sx={{ bgcolor: stringToColor(name), width: 60, height: 60 }}
      >
        {name[0]}
      </Avatar>
    );
  },
  args: { src: "/images/avatar/mascot-1.pneg" },
  parameters: {
    controls: {
      exclude: ["sx"],
    },
  },
};

export const WithBadge: Story = {
  render: (props: AvatarOwnProps) => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
      "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: "auto",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          animation: "ripple 1.2s infinite ease-in-out",
          border: "1px solid currentColor",
          boxSizing: "border-box",
          content: '""',
        },
      },
      "@keyframes ripple": {
        "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(2.4)",
          opacity: 0,
        },
      },
    }));

    return (
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/images/avatar/mascot-1.png" {...props} />
      </StyledBadge>
    );
  },
};

export const Group: Story = {
  render: (props: AvatarOwnProps) => {
    return (
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/images/avatar/mascot-1.png" />
        <Avatar alt="Travis Howard" src="/images/avatar/mascot-2.png" />
        <Avatar alt="Cindy Baker" src="/images/avatar/mascot-3.png" />
        <Avatar alt="Agnes Walker" src="/images/avatar/mascot-4.png" />
        <Avatar alt="Trevor Henderson" src="/images/avatar/mascot-5.png" />
      </AvatarGroup>
    );
  },
};

export const Total: Story = {
  render: (props: AvatarOwnProps) => {
    return (
      <AvatarGroup total={24}>
        <Avatar alt="Remy Sharp" src="/images/avatar/mascot-1.png" />
        <Avatar alt="Travis Howard" src="/images/avatar/mascot-2.png" />
        <Avatar alt="Agnes Walker" src="/images/avatar/mascot-3.png" />
        <Avatar alt="Trevor Henderson" src="/images/avatar/mascot-4.png" />
      </AvatarGroup>
    );
  },
};

export const CustomSurplus: Story = {
  render: (props: AvatarOwnProps) => {
    return (
      <AvatarGroup
        renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
        total={4251}
      >
        <Avatar alt="Remy Sharp" src="/images/avatar/mascot-1.png" />
        <Avatar alt="Travis Howard" src="/images/avatar/mascot-2.png" />
        <Avatar alt="Agnes Walker" src="/images/avatar/mascot-3.png" />
        <Avatar alt="Trevor Henderson" src="/images/avatar/mascot-4.png" />
      </AvatarGroup>
    );
  },
};
