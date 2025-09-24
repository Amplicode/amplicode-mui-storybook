import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState, MouseEvent } from "react";
import { MoreHoriz } from "@mui/icons-material";

const meta = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors.</p>`,
      },
    },
  },
  tags: ["navigation", "breadcrumbs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#/catalog">
            Catalog
          </Link>
          <Typography color="text.primary">Accessories</Typography>
        </Breadcrumbs>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: ``,
      },
      source: {
        code: `<Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">Home</Link>
          <Link underline="hover" color="inherit" href="#/catalog">Catalog</Link>
          <Typography color="text.primary">Accessories</Typography>
        </Breadcrumbs>`,
      },
    },
  },
};

export const CustomSeparator: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#/trending">
            Trending
          </Link>
          <Typography color="text.primary">Today</Typography>
        </Breadcrumbs>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: ``,
      },
      source: {
        code: `<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#">Home</Link>
          <Link underline="hover" color="inherit" href="#/trending">Trending</Link>
          <Typography color="text.primary">Today</Typography>
        </Breadcrumbs>`,
      },
    },
  },
  tags: ["separator"],
};

export const Collapsed: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          maxItems={3}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={1}
          expandText="Показать путь"
        >
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#/store">
            Store
          </Link>
          <Link underline="hover" color="inherit" href="#/men">
            Men
          </Link>
          <Link underline="hover" color="inherit" href="#/shoes">
            Shoes
          </Link>
          <Typography color="text.primary">Sneakers</Typography>
        </Breadcrumbs>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: ``,
      },
      source: {
        code: `<Breadcrumbs maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1} expandText="Показать путь">
          <Link underline="hover" color="inherit" href="#">Home</Link>
          <Link underline="hover" color="inherit" href="#/store">Store</Link>
          <Link underline="hover" color="inherit" href="#/men">Men</Link>
          <Link underline="hover" color="inherit" href="#/shoes">Shoes</Link>
          <Typography color="text.primary">Sneakers</Typography>
        </Breadcrumbs>`,
      },
    },
  },
};

export const CondensedWithMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement> | null) => {
      if (event) {
        setAnchorEl(event.currentTarget);
      }
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          aria-labelledby="with-menu-demo-breadcrumbs"
        >
          <MenuItem onClick={handleClose}>Breadcrumb 2</MenuItem>
          <MenuItem onClick={handleClose}>Breadcrumb 3</MenuItem>
          <MenuItem onClick={handleClose}>Breadcrumb 4</MenuItem>
        </Menu>
        <Breadcrumbs aria-label="breadcrumbs">
          <Link color="inherit" href="#condensed-with-menu">
            Breadcrumb 1
          </Link>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <MoreHoriz />
          </IconButton>
          <Link color="inherit" href="#condensed-with-menu">
            Breadcrumb 5
          </Link>
          <Link color="inherit" href="#condensed-with-menu">
            Breadcrumb 6
          </Link>
        </Breadcrumbs>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>As an alternative, consider adding a Menu component to display the condensed links in a dropdown list</p>`,
      },
      source: {
        code: `<Breadcrumbs
          maxItems={3}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={1}
          slots={{ CollapsedIcon: WhatshotIcon }}
          slotProps={{ collapsedIcon: { fontSize: 'small', color: 'action' } }}
        >
          <Link underline="hover" color="inherit" href="#">Home</Link>
          <Link underline="hover" color="inherit" href="#/featured">Featured</Link>
          <Link underline="hover" color="inherit" href="#/collections">Collections</Link>
          <Typography color="text.primary">Summer</Typography>
        </Breadcrumbs>`,
      },
    },
  },
};
