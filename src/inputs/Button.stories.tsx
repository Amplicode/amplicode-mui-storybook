import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonOwnProps, styled } from "@mui/material";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from '@mui/icons-material/Send';

const ICONS_MAP = {
  AlarmOnIcon: <AlarmOnIcon />,
  AlarmOffIcon: <AlarmOffIcon />,
  CloudUploadIcon: <CloudUploadIcon />,
  SendIcon: <SendIcon />,
}

const meta = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  decorators: [],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
    disabled: {
      control: "boolean",
    },
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"]
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"]
    }
  },
  args: {
    variant: "contained",
    disabled: false,
    color: "primary",
    size: "medium",
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Simple ready to use story with arguments passed to props
 */
export const Text: Story = {
  render: ({ variant, ...props }: ButtonOwnProps) => {
    return <Button variant={variant} {...props}>Button</Button>;
  },
  args: {
    variant: "text"
  },
};

/**
 * Simple ready to use story with arguments passed to props
 */
export const Contained: Story = {
  render: ({ variant, ...props }: ButtonOwnProps) => {
    return <Button variant={variant} {...props}>Button</Button>;
  },
  parameters: {},
  args: {
    variant: "contained"
  },
};

/**
 * Simple ready to use story with arguments passed to props
 */
export const Outlined: Story = {
  render: ({ variant, ...props }: ButtonOwnProps) => {
    return <Button variant={variant} {...props}>Button</Button>;
  },
  parameters: {},
  args: {
    variant: "outlined"
  },
};

/**
 * Simple ready to use story with arguments passed to props
 */
export const Diabled: Story = {
  render: ({ disabled, ...props }: ButtonOwnProps) => {
    return <Button disabled={disabled} {...props}>Button</Button>;
  },
  args: {
    disabled: true
  },
};

/**
 * Simple ready to use story with arguments passed to props
 */
export const Color: Story = {
  render: ({ color, ...props }: ButtonOwnProps) => {
    return <Button color={color} {...props}>Button</Button>;
  },
  args: {
    color: "secondary",
  },
};

/**
 * Simple ready to use story with arguments passed to props
 */
export const Sizes: Story = {
  render: ({ size, ...props }: ButtonOwnProps) => {
    return <Button size={size} {...props}>Button</Button>;
  },
  args: {
    size: "large",
  },
};

/**
 * Simple ready to use story with arguments passed to props
 */
export const StartIcon: Story = {
  render: ({ startIcon, ...props }: ButtonOwnProps) => {
    return <Button startIcon={startIcon} {...props}>Button</Button>;
  },
  argTypes: {
    startIcon: {
      options: Object.keys(ICONS_MAP),
      mapping: ICONS_MAP,
      control: {
        type: "select",
      }
    }
  },
  args: {
    startIcon: <AlarmOnIcon />,
  },
};

/**
 * Simple ready to use story with arguments passed to props
 */
export const EndIcon: Story = {
  render: ({ endIcon, ...props }: ButtonOwnProps) => {
    return <Button endIcon={endIcon} {...props}>Button</Button>;
  },
  argTypes: {
    endIcon: {
      options: Object.keys(ICONS_MAP),
      mapping: ICONS_MAP,
      control: {
        type: "select",
      }
    }
  },
  args: {
    endIcon: <AlarmOnIcon />,
  },
};

/**
 * Ready to use story with inlined props
 */
export const UploadButton: Story = {
  render: ({ ...props }: ButtonOwnProps) => {
    const VisuallyHiddenInput = styled('input')({
      display: 'none'
    });

    return (
      <Button
        component="label"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        {...props}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
    );
  }
};

/**
 * Ready to use story with arguments passed to props
 */
export const SendButton: Story = {
  render: ({ endIcon, ...props }: ButtonOwnProps) => {
    return (
      <Button
        endIcon={endIcon}
        {...props}
        >
          Send
        </Button>
    );
  },
  args: {
    endIcon: <SendIcon />
  },
  parameters: {
    controls: {
      exclude: ['endIcon']
    },
  }
};

/**
 * Generic story which trigger wizard component creator.
 * Wizard shows common argTypes from meta with story's args as default options
 */
export const GenericButton: Story = {
  render: ({ variant }: ButtonOwnProps) => {
    return <Button variant={variant}>Button</Button>;
  },
  args: {
    variant: "contained"
  },
};

/**
 * Generic story which trigger wizard component creator.
 * Wizard shows story's argTypes with story's args as default options
 */
export const GenericIconButton: Story = {
  render: ({ startIcon }: ButtonOwnProps) => {
    return <Button startIcon={startIcon}>Button</Button>;
  },
  argTypes: {
    startIcon: {
      options: Object.keys(ICONS_MAP),
      mapping: ICONS_MAP,
      control: {
        type: "select",
      }
    }
  },
  args: {
    startIcon: <AlarmOnIcon />,
  },
};
