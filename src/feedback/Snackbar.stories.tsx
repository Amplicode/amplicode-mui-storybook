import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Box, Button, Snackbar } from "@mui/material";
import { useEffect } from "react";

const wrapper = (Story: ({ open, onClose }: { open: boolean; onClose: () => void }) => React.JSX.Element) => {
  const [{ open }, updateArgs] = useArgs();

  const onClose = () => {
    updateArgs({ open: false });
  };

  useEffect(() => {
    updateArgs({ onClose: onClose });
  }, []);

  const onOpen = () => {
    updateArgs({ open: true });
  };

  return (
    <>
      <Button variant="contained" onClick={onOpen}>Open Snackbar</Button>
      <Story open={open} onClose={onClose} />
    </>
  );
};

const meta = {
  title: "Feedback/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["action"],
    },
  },
  decorators: [wrapper],
  argTypes: {
    autoHideDuration: {
      control: "text",
    },
    message: {
      control: "text",
    }
  },
  args: {
    autoHideDuration: 5000,
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ message, action, open, autoHideDuration, ...props }) => {
    return <Snackbar open={open} autoHideDuration={autoHideDuration} message={message} onClose={() => {}} {...props} />;
  },
  args: {
    open: false,
    message: "Snackbar message",
  },
};

export const WithAction: Story = {
  render: ({ message, action, open, autoHideDuration, ...props }) => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={() => {}}
        message={message}
        action={action}
        {...props}
      />
    );
  },
  args: {
    open: false,
    message: "Snackbar message",
    action: (
      <Button color="primary" size="small" onClick={() => {}}>
        Action
      </Button>
    ),
  },
};
