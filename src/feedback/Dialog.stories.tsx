import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  styled,
} from "@mui/material";
import { forwardRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    controls: {},
  },
  decorators: [],
  argTypes: {
    fullScreen: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    }
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(true);

    return (
      <Dialog open={dialogOpen} onClose={() => {}}>
        <DialogTitle>Basic dialog title</DialogTitle>
        <DialogContent>
          <DialogContentText>Description of dialog actions</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}}>Cancel</Button>
          <Button onClick={() => {}} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    );
  },
};

export const DropGaps: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(true);

    return (
      <CustomDialog open={dialogOpen} onClose={() => {}}>
        <DialogTitle>Dialog with dropped gaps</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set gaps by your own if you need custom dialog locally
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}}>Cancel</Button>
          <Button onClick={() => {}} autoFocus>
            Accept
          </Button>
        </DialogActions>
      </CustomDialog>
    );
  },
};

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogTitle-root": {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    boxSizing: "border-box",
  },
  "& .MuiCardContent-root": {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    boxSizing: "border-box",
  },
  "& .MuiDialogContent-root": {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    boxSizing: "border-box",
  },
  "& .MuiDialogActions-root": {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    boxSizing: "border-box",
  },
}));

export const Transitioned: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
      <>
        <Button
          variant="outlined"
          onClick={() => setDialogOpen((open) => !open)}
        >
          Slide in alert dialog
        </Button>
        <Dialog
          open={dialogOpen}
          TransitionComponent={Transition}
          onClose={() => {}}
        >
          <DialogTitle>Dialog with dropped gaps</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can set gaps by your own if you need custom dialog locally
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {}}>Cancel</Button>
            <Button onClick={() => {}} autoFocus>
              Accept
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
