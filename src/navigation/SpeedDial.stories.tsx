import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Backdrop,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const meta = {
  title: "Navigation/SpeedDial",
  component: SpeedDial,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>Speed Dial provides a primary floating action that expands to a set of related actions. It supports different directions, controlled open state, custom icons, and tooltips.</p>`,
      },
    },
  },
  args: {},
  tags: ["speeddial", "fab"],
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <Box sx={{ height: 320, width: 420, position: "relative" }}>
        <SpeedDial
          ariaLabel="SpeedDial basic"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
  args: { ariaLabel: "SpeedDial basic" },
  parameters: {
    docs: {
      description: {
        story: "The floating action button can display related actions.",
      },
      source: {
        code: `
          <Box sx={{ height: 320, width: 420, position: "relative" }}>
            <SpeedDial
              ariaLabel="SpeedDial basic"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  slotProps={{
                    tooltip: {
                      title: action.name,
                    },
                  }}
                />
              ))}
            </SpeedDial>
          </Box>
        `,
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Box sx={{ height: 360, width: 420, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                },
              }}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "The open state of the component can be controlled with the open/onOpen/onClose props.",
      },
      source: {
        code: `
          const [open, setOpen] = useState(false);
          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);

          <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial controlled open example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                slotProps={{
                  tooltip: {
                    title: action.name,
                  },
                }}
                onClick={handleClose}
              />
            ))}
          </SpeedDial>
        </Box>
        `,
      },
    },
  },
  args: { ariaLabel: "SpeedDial controlled" },
};

export const ControlledWithBackdrop: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Box sx={{ height: 360, width: 420, position: "relative" }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="Controlled SpeedDial"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onOpen={handleOpen}
          onClose={handleClose}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A controlled Speed Dial that manages `open` state and displays a backdrop while expanded.",
      },
      source: {
        code: `
          const [open, setOpen] = useState(false);
          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);

          <Box sx={{ height: 360, width: 420, position: "relative" }}>
            <Backdrop open={open} />
            <SpeedDial
              ariaLabel="Controlled SpeedDial"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
              onOpen={handleOpen}
              onClose={handleClose}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
          </Box>
        `,
      },
    },
  },
  args: { ariaLabel: "SpeedDial backdrop" },
};

export const CustomIcons: Story = {
  render: () => {
    return (
      <Box sx={{ height: 320, width: 420, position: "relative" }}>
        <SpeedDial
          ariaLabel="Custom icon SpeedDial"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `SpeedDialIcon` with `openIcon` to swap the main FAB icon while the dial is expanded.",
      },
      source: {
        code: `
          <Box sx={{ height: 320, width: 420, position: "relative" }}>
            <SpeedDial
              ariaLabel="Custom icon SpeedDial"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  slotProps={{
                    tooltip: {
                      title: action.name,
                    },
                  }}
                />
              ))}
            </SpeedDial>
          </Box>
        `,
      },
    },
  },
  args: { ariaLabel: "SpeedDial icon" },
};

export const PersistentTooltips: Story = {
  render: () => {
    return (
      <Box sx={{ height: 320, width: 420, position: "relative" }}>
        <SpeedDial
          ariaLabel="Persistent tooltips"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{
                tooltip: {
                  title: action.name,
                  open: true
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set `tooltipOpen` on actions to keep tooltips visible without hover or focus.",
      },
      source: {
        code: `
          <Box sx={{ height: 320, width: 420, position: "relative" }}>
            <SpeedDial
              ariaLabel="Persistent tooltips"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                />
              ))}
            </SpeedDial>
          </Box>
        `,
      },
    },
  },
  args: { ariaLabel: "SpeedDial tooltips" },
};
