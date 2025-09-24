import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
  Logout,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import { useState, MouseEvent } from "react";

const meta = {
  title: "Navigation/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>Menus display a list of choices on temporary surfaces. They open from an anchor (e.g. a button) and use Popover positioning. Compose with <code>MenuList</code> when you need custom anchoring/positioning behavior.</p>`,
      },
    },
  },
  args: {
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
  },
  argTypes: {
    anchorOrigin: {
      control: "object",
    },
  },
  tags: ["menu", "navigation", "contextmenu"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
      <Box>
        <Button variant="contained" onClick={handleOpen}>
          Open menu
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>Basic usage with a button anchor. Focus and keyboard navigation are handled for you.</p>`,
      },
      source: {
        code: `
          const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
          const open = Boolean(anchorEl);
          const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
            setAnchorEl(e.currentTarget);
          const handleClose = () => setAnchorEl(null);

          <>
            <Button onClick={handleOpen}>Open menu</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </>
        `,
      },
    },
  },
  args: { open: true },
};

export const IconcMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
      <Box>
        <Button variant="contained" onClick={handleOpen}>
          Open menu
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuList>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ⌘V
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: ``,
      },
      source: {
        code: `
          const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
          const open = Boolean(anchorEl);
          const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
            setAnchorEl(e.currentTarget);
          const handleClose = () => setAnchorEl(null);

          <>
            <Button onClick={handleOpen}>Open menu</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuList>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    ⌘X
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    ⌘C
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    ⌘V
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        `,
      },
    },
  },
  args: { open: true },
};

export const PositionedMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          Open bottom-start
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem onClick={handleClose}>Cut</MenuItem>
          <MenuItem onClick={handleClose}>Copy</MenuItem>
          <MenuItem onClick={handleClose}>Paste</MenuItem>
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>Control where the menu appears by combining <code>anchorOrigin</code> and <code>transformOrigin</code> (inherited from Popover).</p>`,
      },
      source: {
        code: `
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          />
        `,
      },
    },
  },
  args: {
    open: true,
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
  },
};

const StyledListHeader = styled(ListSubheader)({
  backgroundImage: 'var(--Paper-overlay)',
});

export const GroupedMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          Open menu
        </Button>
        <Menu
          id="grouped-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              sx: {
                py: 0,
              },
            },
          }}
        >
          <StyledListHeader>Category 1</StyledListHeader>
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <StyledListHeader>Category 2</StyledListHeader>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
          <MenuItem onClick={handleClose}>Option 4</MenuItem>
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>Display categories with the <code>ListSubheader</code> component.</p>`,
      },
      source: {
        code: `
          <Box>
            <Button variant="outlined" onClick={handleOpen}>
              Open menu
            </Button>
            <Menu
              id="grouped-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  sx: {
                    py: 0,
                  },
                },
              }}
            >
              <StyledListHeader>Category 1</StyledListHeader>
              <MenuItem onClick={handleClose}>Option 1</MenuItem>
              <MenuItem onClick={handleClose}>Option 2</MenuItem>
              <StyledListHeader>Category 2</StyledListHeader>
              <MenuItem onClick={handleClose}>Option 3</MenuItem>
              <MenuItem onClick={handleClose}>Option 4</MenuItem>
            </Menu>
          </Box>
        `,
      },
    },
  },
  args: {
    open: true,
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
  },
};

export const DenseMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          Open dense
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: { dense: true },
          }}
        >
          <MenuItem onClick={handleClose}>Single</MenuItem>
          <MenuItem onClick={handleClose}>Compact</MenuItem>
          <MenuItem onClick={handleClose}>Comfortable</MenuItem>
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>For the menu that has long list and long text, you can use the <code>dense</code> prop to reduce the padding and text size.</p>`,
      },
      source: {
        code: `
          <Menu open anchorEl={anchorEl} onClose={handleClose}
            slotProps={{ list: { dense: true } }}
          >
            <MenuItem>Single</MenuItem>
            <MenuItem>Compact</MenuItem>
            <MenuItem>Comfortable</MenuItem>
          </Menu>
        `,
      },
    },
  },
  args: { open: true },
};

export const AccountMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleOpen}
            size="small"
          >
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                mt: 1.5,
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar sx={{ width: 24, height: 24, mr: 1 }} /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar sx={{ width: 24, height: 24, mr: 1 }} /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>Common “account” pattern with an avatar trigger and a styled paper. In v7 prefer <code>slotProps.paper</code> for Paper customization.</p>`,
      },
      source: {
        code: `<IconButton onClick={handleOpen}><Avatar>A</Avatar></IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{ paper: { elevation: 0, sx: { mt: 1.5 } } }}
          >
            <MenuItem><Avatar /> Profile</MenuItem>
            <Divider />
            <MenuItem><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Settings</MenuItem>
          </Menu>`,
      },
    },
  },
  args: { open: true },
};

export const ActionsMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          Edit
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            Paste
          </MenuItem>
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>Menus often combine labels with icons to improve scanability for frequent actions.</p>`,
      },
      source: {
        code: `<Menu open anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem><ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>Cut</MenuItem>
        <MenuItem><ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>Copy</MenuItem>
        <MenuItem><ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>Paste</MenuItem>
      </Menu>`,
      },
    },
  },
  args: { open: true },
};

export const ScrollMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpen = (e: MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const options = Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`);

    return (
      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          Open long menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: { sx: { maxHeight: 48 * 4.5, width: 240 } },
          }}
        >
          {options.map((opt) => (
            <MenuItem key={opt} onClick={handleClose}>
              {opt}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>Constrain menu height and width via <code>slotProps.paper.sx</code> to handle long option lists.</p>`,
      },
      source: {
        code: `<Menu
          open
          slotProps={{ paper: { sx: { maxHeight: 48 * 4.5, width: 240 } } }}
        >
          {options.map(o => <MenuItem key={o}>{o}</MenuItem>)}
        </Menu>`,
      },
    },
  },
  args: { open: true },
};
