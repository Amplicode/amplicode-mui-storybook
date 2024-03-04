import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from "@storybook/react";
import { Backdrop, Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect } from 'react';

const wrapper = (Story: ({open, onClick}: {open: boolean, onClick: () => void}) => React.JSX.Element) => {
  const [{ open }, updateArgs] = useArgs();
  
  const onClose = () => {
    updateArgs({open: false});
  }

  useEffect(() => {
    updateArgs({onClick: onClose})
  }, [])

  const onOpen = () => {
    updateArgs({open: true});
  }

  return (
    <>
      <Button variant="contained" onClick={onOpen}>Open Backdrop</Button>
      <Story open={open} onClick={onClose} />
    </>
  );
};

const meta = {
  title: "Feedback/Backdrop",
  component: Backdrop,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ['onClick']
    },
  },
  decorators: [wrapper],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithProgress: Story = {
  render: ({ open, onClick, ...props }) => {
    return (
      <Backdrop sx={{ color: '#fff', }} open={open} onClick={onClick}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  },
  args: {
    open: false,
    onClick: () => { /** handle click */ }
  }
};

export const WithCustomContent: Story = {
  render: ({ open, onClick, children, ...props }) => {
    return (
      <Backdrop sx={{ background: '#fff' }} open={open} onClick={onClick}>
        {children}
      </Backdrop>
    );
  },
  args: {
    open: false,
    onClick: () => { /** handle click */ },
    children: <Typography>Custom content</Typography>
  }
};
