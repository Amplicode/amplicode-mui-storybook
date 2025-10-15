import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

const meta = {
  title: "DataDisplay/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>Tooltips display informative text when users hover, focus, or tap an element. They support positioning, arrows, transitions, controlled open state, and customization via <code>slots</code>/<code>slotProps</code>.</p>`,
      },
    },
  },
  tags: ["wrapper", "tooltip"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ children, ...props }) => {
    return <Tooltip title="Add to library">{children}</Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: "Default tooltip shown on hover or focus of the child element.",
      },
      source: {
        code: `<Tooltip title="Add to library"><Button>Hover me</Button></Tooltip>`,
      },
    },
  },
  args: {
    title: "Add to library",
    children: <Button variant="contained">Hover me</Button>,
  },
};

export const WithArrow: Story = {
  render: ({children, ...props}) => {
    return (
      <Tooltip title="Delete" arrow>
        {children}
      </Tooltip>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Show a pointing arrow by enabling the `arrow` prop.",
      },
      source: {
        code: `<Tooltip title="Delete" arrow><IconButton><DeleteOutline/></IconButton></Tooltip>`,
      },
    },
  },
    args: {
    title: "Delete",
    children: <IconButton color="error">
        <DeleteOutline />
      </IconButton>,
  },
};
