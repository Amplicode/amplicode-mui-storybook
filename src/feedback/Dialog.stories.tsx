import { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import { useState } from "react";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">Basic dialog usage example.</Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
  argTypes: {
    open: {
      control: "boolean",
      description: "If true, the dialog is open.",
      category: "State",
    },
    fullWidth: {
      control: "boolean",
      description: "If true, the dialog stretches to full width.",
      category: "Layout",
    },
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", false],
      description: "Defines the maximum width of the dialog.",
      category: "Layout",
    },
    scroll: {
      control: "select",
      options: ["paper", "body"],
      description: "Defines how scrolling should be handled inside the dialog.",
      category: "Behavior",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ open, ...props }) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
      <>
        <Button variant="outlined" onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} {...props}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>This is a simple dialog.</DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    open: false,
  },
};

export const FullWidth: Story = {
  render: ({ open, fullWidth, ...props }) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
      <>
        <Button variant="outlined" onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} fullWidth={fullWidth} {...props}>
          <DialogTitle>Full Width Dialog</DialogTitle>
          <DialogContent>Expands to full width.</DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    open: false,
    fullWidth: true,
  },
};

export const MaxWidth: Story = {
  render: ({ open, maxWidth, ...props }) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
      <>
        <Button variant="outlined" onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth={maxWidth} {...props}>
          <DialogTitle>Max Width Dialog</DialogTitle>
          <DialogContent>Restricted to a max width.</DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    open: false,
    maxWidth: "sm",
  },
};

export const Scrolling: Story = {
  render: ({ open, scroll, ...props }) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
      <>
        <Button variant="outlined" onClick={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} scroll={scroll} {...props}>
          <DialogTitle>Scrolling Dialog</DialogTitle>
          <DialogContent>
            {[...Array(20)].map((_, i) => (
              <Typography key={i}>Scrollable content line {i + 1}</Typography>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    open: false,
    scroll: "paper",
  },
};
