import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import { useState } from "react";
import { GenerationInstructions } from "@amplicode/storybook-extensions";

const meta = {
  title: "Navigation/BottomNavigation",
  component: BottomNavigation,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>The Bottom Navigation bar allows movement between primary destinations in an app.</p><p>Bottom navigation bars display three to five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is taken to the top-level navigation destination associated with that icon.</p>`,
      },
    },
  },
  tags: ["navigation", "bottomnavigation"],
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ width: 240 }}>
        <GenerationInstructions.InsertOnly>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </GenerationInstructions.InsertOnly>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>When there are only three actions, display both icons and text labels at all times.</p>`,
      },
      source: {
        code: `
        const [value, setValue] = useState(0);
        
        <BottomNavigation showLabels value={value} onChange={(_, v) => setValue(v)}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>`,
      },
    },
  },
};

export const NoLabel: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ width: 240 }}>
        <GenerationInstructions.InsertOnly>
          <BottomNavigation value={value} onChange={(_, v) => setValue(v)}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" icon={<FolderIcon />} />
        </BottomNavigation>
        </GenerationInstructions.InsertOnly>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `<p>If there are four or five actions, display inactive views as icons only.</p>`,
      },
      source: {
        code: `
        const [value, setValue] = useState(0);
        
        <BottomNavigation value={value} onChange={(_, v) => setValue(v)}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" icon={<FolderIcon />} />
        </BottomNavigation>`,
      },
    },
  },
};
