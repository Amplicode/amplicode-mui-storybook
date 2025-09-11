import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  Box,
  Checkbox,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarBorder from "@mui/icons-material/StarBorder";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const meta = {
  title: "DataDisplay/List",
  component: List,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          `<p>Lists present a set of related items. They support text, icons, avatars, selection, nested groups, switches/checkboxes, and dividers. Use <code>ListItemButton</code> for interactive rows and the <code>secondaryAction</code> prop for trailing controls.</p>`,
      },
    },
  },
  tags: ["list"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List aria-label="basic list">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "A simple interactive list with icons and primary text." },
      source: {
        code: `<Box sx={{ width: 360, bgcolor: "background.paper" }}>
      <List aria-label="basic list">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>`,
      },
    },
  },
};

export const WithAvatars: Story = {
  render: () => {
    return (
      <Box sx={{ width: 380, bgcolor: "background.paper" }}>
        <List>
          {[1, 2, 3].map((i) => (
            <ListItem key={i} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{i}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`Conversation ${i}`}
                secondary="Secondary text can wrap to multiple lines for longer descriptions." />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Use `ListItemAvatar` and `secondary` for two-line layouts." },
      source: {
        code: `<Box sx={{ width: 380, bgcolor: "background.paper" }}>
      <List>
        {[1, 2, 3].map((i) => (
          <ListItem key={i} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{i}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={1}
              secondary="Secondary text can wrap to multiple lines for longer descriptions."
            />
          </ListItem>
        ))}
      </List>
    </Box>`,
      },
    },
  },
};

export const SelectedAndDisabled: Story = {
  render: () => {
    return (
      <Box sx={{ width: 320, bgcolor: "background.paper" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton selected>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Selected item" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Disabled item" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Apply `selected` and `disabled` to indicate state." },
      source: {
        code: `<Box sx={{ width: 320, bgcolor: "background.paper" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton selected>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Selected item" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Disabled item" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>`,
      },
    },
  },
};

export const CheckboxList: Story = {
  render: () => {
    const [checked, setChecked] = useState<number[]>([0, 2]);
    const toggle = (value: number) => {
      setChecked((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
      );
    };
    return (
      <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                key={value}
                disablePadding
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemButton role={undefined} onClick={() => toggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.includes(value)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Combine `Checkbox` with `ListItemButton` for toggleable rows; use the `secondaryAction` prop for trailing actions.",
      },
      source: {
        code: `
        const [checked, setChecked] = useState<number[]>([0, 2]);
        const toggle = (value: number) => {
          setChecked((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
          );
        };

        <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List>
          {[0, 1, 2, 3].map((value) => {
            const labelId = 'checkbox-list-label';
            return (
              <ListItem
                key={value}
                disablePadding
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemButton role={undefined} onClick={() => toggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.includes(value)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={'Line item'} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>`,
      },
    },
  },
};

export const SwitchList: Story = {
  render: () => {
    const [wifi, setWifi] = useState(true);
    const [bt, setBt] = useState(false);
    return (
      <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List subheader={<ListSubheader>Wireless</ListSubheader>}>
          <ListItem
            secondaryAction={<Switch edge="end" checked={wifi} onChange={(e) => setWifi(e.target.checked)} />}
          >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Wi-Fi" secondary="Connect automatically" />
          </ListItem>
          <ListItem
            secondaryAction={<Switch edge="end" checked={bt} onChange={(e) => setBt(e.target.checked)} />}
          >
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Bluetooth" secondary="Visible to nearby devices" />
          </ListItem>
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Use `secondaryAction` to place a trailing `Switch` for settings." },
      source: {
        code: `
        const [wifi, setWifi] = useState(true);
         const [bt, setBt] = useState(false);

        <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List subheader={<ListSubheader>Wireless</ListSubheader>}>
          <ListItem
            secondaryAction={<Switch edge="end" checked={wifi} onChange={(e) => setWifi(e.target.checked)} />}
          >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Wi-Fi" secondary="Connect automatically" />
          </ListItem>
          <ListItem
            secondaryAction={<Switch edge="end" checked={bt} onChange={(e) => setBt(e.target.checked)} />}
          >
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Bluetooth" secondary="Visible to nearby devices" />
          </ListItem>
        </List>
      </Box>`,
      },
    },
  },
};

export const Nested: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={<ListSubheader id="nested-list-subheader">Folders</ListSubheader>}
        >
          <ListItemButton onClick={() => setOpen((v) => !v)}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><StarBorder /></ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          <ListItemButton>
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Group related items and show/hide children using `Collapse`. Indent nested rows with padding.",
      },
      source: {
        code: `
        const [open, setOpen] = useState(true);

        <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={<ListSubheader id="nested-list-subheader">Folders</ListSubheader>}
        >
          <ListItemButton onClick={() => setOpen((v) => !v)}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><StarBorder /></ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          <ListItemButton>
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>
      </Box>`,
      },
    },
  },
};

export const InsetDividersDense: Story = {
  render: () => {
    return (
      <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List dense>
          <ListItem>
            <ListItemAvatar><Avatar>R</Avatar></ListItemAvatar>
            <ListItemText primary="Riley Howard" secondary="Online" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar><Avatar>M</Avatar></ListItemAvatar>
            <ListItemText primary="Maya Patel" secondary="Away" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar><Avatar>K</Avatar></ListItemAvatar>
            <ListItemText primary="Ken Ito" secondary="Do not disturb" />
          </ListItem>
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Use `dense` for compact lists and `Divider` with `variant=\"inset\"` to align with text." },
      source: {
        code: `<Box sx={{ width: 360, bgcolor: "background.paper" }}>
      <List dense>
        <ListItem>
          <ListItemAvatar><Avatar>R</Avatar></ListItemAvatar>
          <ListItemText primary="Riley Howard" secondary="Online" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar><Avatar>M</Avatar></ListItemAvatar>
          <ListItemText primary="Maya Patel" secondary="Away" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar><Avatar>K</Avatar></ListItemAvatar>
          <ListItemText primary="Ken Ito" secondary="Do not disturb" />
        </ListItem>
      </List>
    </Box>`,
      },
    },
  },
};

export const SectionedWithSubheaders: Story = {
  render: () => {
    return (
      <Box sx={{ width: 360, bgcolor: "background.paper" }}>
        <List
          subheader={<ListSubheader component="div">Messages</ListSubheader>}
          aria-label="messages list"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="All mail" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><DraftsIcon /></ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Organize content with `ListSubheader` sections." },
      source: {
        code: `<Box sx={{ width: 360, bgcolor: "background.paper" }}>
      <List
        subheader={<ListSubheader component="div">Messages</ListSubheader>}
        aria-label="messages list"
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="All mail" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>`,
      },
    },
  },
};