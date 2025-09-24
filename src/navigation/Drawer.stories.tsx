import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { useState } from "react";

const meta = {
  title: "Navigation/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `<p>The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.</p>`,
      },
    },
  },
  tags: ["drawer", "navigation", "sidebar"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const drawerWidth = 280;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box sx={{ p: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open drawer
        </Button>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          slotProps={{
            paper: { sx: { width: drawerWidth } },
            backdrop: { timeout: 250 },
          }}
        >
          <Toolbar />
          <GenerationInstructions.Exclude>
            <Box sx={{ px: 2, py: 1 }}>
              <Typography variant="h6">Navigation</Typography>
            </Box>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map((text, i) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </GenerationInstructions.Exclude>
        </Drawer>
      </Box>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
        const [open, setOpen] = useState(false);

        <Box sx={{ p: 2 }}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Open drawer
          </Button>
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            slotProps={{
              paper: { sx: { width: drawerWidth } },
              backdrop: { timeout: 250 },
            }}
          >
            <Toolbar />
          </Drawer>
        </Box>`,
      },
    },
  },
};

