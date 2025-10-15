import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton, IconButtonOwnProps, styled } from "@mui/material";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from '@mui/icons-material/Send';
import { AddIcCallOutlined } from "@mui/icons-material";

const ICONS_MAP = {
  AlarmOnIcon: <AlarmOnIcon />,
  AlarmOffIcon: <AlarmOffIcon />,
  CloudUploadIcon: <CloudUploadIcon />,
  SendIcon: <SendIcon />,
}

const meta = {
  title: "Inputs/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  decorators: [],
  argTypes: {
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
    color: "primary",
    size: "medium",
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Simple ready to use story with arguments passed to props
 */
export const Default: Story = {
  render: ({ ...props }: IconButtonOwnProps) => {
    return <IconButton {...props}><AddIcCallOutlined /></IconButton>;
  },
  args: {
  }
};
