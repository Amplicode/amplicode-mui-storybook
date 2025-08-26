import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { GenerationInstructions } from "@amplicode/storybook-extensions";

const meta: Meta<typeof Popover> = {
  title: "Utils/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `The <code>Popover</code> component displays content on top of another element, anchored to it. It is typically used for contextual menus, tooltips, or additional information triggered by user actions.`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
      <Box>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button>
        <GenerationInstructions.InsertOnly>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography>This is the Popover content.</Typography>
            </Box>
          </Popover>
        </GenerationInstructions.InsertOnly>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A simple `Popover` anchored to a button, closing on click outside.",
      },
    },
  },
};
