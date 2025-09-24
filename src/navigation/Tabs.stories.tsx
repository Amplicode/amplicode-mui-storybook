import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import { useState, ReactNode } from "react";

function TabPanel(props: {
  children?: ReactNode;
  value: number | string;
  index: number | string;
}) {
  const { children, value, index } = props;
  const hidden = value !== index;
  return (
    <div
      role="tabpanel"
      hidden={hidden}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{ width: "100%" }}
    >
      {!hidden && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>Tabs let users switch between related views. The component is controlled with <code>value</code>/<code>onChange</code>, supports scrollable and vertical orientations, icon+label tabs, full-width layout, and customization via <code>slots</code>/<code>slotProps</code>.</p>`,
      },
    },
  },
  tags: ["!autodocs", "tabs", "navigation"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ width: 520 }}>
        <Tabs
          value={value}
          onChange={(_, v) => setValue(v)}
          aria-label="basic tabs"
        >
          <Tab label="Overview" />
          <Tab label="Details" />
          <Tab label="Reviews" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Typography variant="body2">Overview content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body2">Details content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body2">Reviews content</Typography>
        </TabPanel>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "" },
      source: {
        code: `const [value, setValue] = useState(0);
          <Tabs value={value} onChange={(_, v) => setValue(v)}>
            <Tab label="Overview" />
            <Tab label="Details" />
            <Tab label="Reviews" />
          </Tabs>`,
      },
    },
  },
};

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    const labels = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

    return (
      <Box sx={{ width: 520 }}>
        <Tabs
          value={value}
          onChange={(_, v) => setValue(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable tabs"
        >
          {labels.map((label, i) => (
            <Tab
              key={label}
              id={`tab-${i}`}
              aria-controls={`tabpanel-${i}`}
              label={label}
            />
          ))}
        </Tabs>

        <TabPanel value={value} index={value}>
          <Typography variant="body2">Content for {labels[value]}</Typography>
        </TabPanel>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Scrollable tabs with automatic scroll buttons; mobile scroll buttons are enabled.",
      },
      source: {
        code: `
          const [value, setValue] = useState(0);
          const labels = Array.from({ length: 10 }, (_, i) => 'Item');

          <Box sx={{ width: 520 }}>
            <Tabs
              value={value}
              onChange={(_, v) => setValue(v)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="scrollable tabs"
            >
              {labels.map((label, i) => (
                <Tab key={label} id={"id"} aria-controls={"tab"} label={label} />
              ))}
            </Tabs>

            <TabPanel value={value} index={value}>
              <Typography variant="body2">Content for {labels[value]}</Typography>
            </TabPanel>
          </Box>
        `,
      },
    },
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Stack direction="row" spacing={2} sx={{ height: 260 }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={(_, v) => setValue(v)}
          sx={{ borderRight: 1, borderColor: "divider", minWidth: 160 }}
          aria-label="vertical tabs"
        >
          <Tab id="tab-0" aria-controls="tabpanel-0" label="General" />
          <Tab id="tab-1" aria-controls="tabpanel-1" label="Security" />
          <Tab id="tab-2" aria-controls="tabpanel-2" label="Billing" />
        </Tabs>
        <Box sx={{ flex: 1 }}>
          <TabPanel value={value} index={0}>
            <Typography variant="body2">General settings</Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="body2">Security settings</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="body2">Billing settings</Typography>
          </TabPanel>
        </Box>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: { story: "Vertical tabs for settings-like layouts." },
      source: {
        code: `
          const [value, setValue] = useState(0);

          <Stack direction="row" spacing={2} sx={{ height: 260 }}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={(_, v) => setValue(v)}
              sx={{ borderRight: 1, borderColor: "divider", minWidth: 160 }}
              aria-label="vertical tabs"
            >
              <Tab id="tab-0" aria-controls="tabpanel-0" label="General" />
              <Tab id="tab-1" aria-controls="tabpanel-1" label="Security" />
              <Tab id="tab-2" aria-controls="tabpanel-2" label="Billing" />
            </Tabs>
            <Box sx={{ flex: 1 }}>
              <TabPanel value={value} index={0}>
                <Typography variant="body2">General settings</Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography variant="body2">Security settings</Typography>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography variant="body2">Billing settings</Typography>
              </TabPanel>
            </Box>
          </Stack>
        `,
      },
    },
  },
};

export const IconsAndLabels: Story = {
  render: () => {
    const [value, setValue] = useState(1);
    return (
      <Box sx={{ width: 520 }}>
        <Tabs
          value={value}
          onChange={(_, v) => setValue(v)}
          aria-label="icon tabs"
        >
          <Tab
            id="tab-0"
            aria-controls="tabpanel-0"
            icon={<span>🏠</span>}
            label="Home"
          />
          <Tab
            id="tab-1"
            aria-controls="tabpanel-1"
            icon={<span>📄</span>}
            label="Docs"
          />
          <Tab
            id="tab-2"
            aria-controls="tabpanel-2"
            icon={<span>⚙️</span>}
            label="Settings"
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Home
        </TabPanel>
        <TabPanel value={value} index={1}>
          Docs
        </TabPanel>
        <TabPanel value={value} index={2}>
          Settings
        </TabPanel>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tabs can show both icons and labels to aid recognition and accessibility.",
      },
      source: {
        code: `
          const [value, setValue] = useState(1);

          <Box sx={{ width: 520 }}>
            <Tabs
              value={value}
              onChange={(_, v) => setValue(v)}
              aria-label="icon tabs"
            >
              <Tab
                id="tab-0"
                aria-controls="tabpanel-0"
                icon={<span>🏠</span>}
                label="Home"
              />
              <Tab
                id="tab-1"
                aria-controls="tabpanel-1"
                icon={<span>📄</span>}
                label="Docs"
              />
              <Tab
                id="tab-2"
                aria-controls="tabpanel-2"
                icon={<span>⚙️</span>}
                label="Settings"
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              Home
            </TabPanel>
            <TabPanel value={value} index={1}>
              Docs
            </TabPanel>
            <TabPanel value={value} index={2}>
              Settings
            </TabPanel>
          </Box>
        `,
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Box sx={{ width: 480 }}>
        <Tabs
          value={value}
          onChange={(_, v) => setValue(v)}
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab id="tab-0" aria-controls="tabpanel-0" label="One" />
          <Tab id="tab-1" aria-controls="tabpanel-1" label="Two" />
          <Tab id="tab-2" aria-controls="tabpanel-2" label="Three" />
        </Tabs>
        <TabPanel value={value} index={value}>
          <Typography variant="body2">Panel {value + 1}</Typography>
        </TabPanel>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Full-width tabs distribute space evenly across the container.",
      },
      source: {
        code: `
          const [value, setValue] = useState(0);

          <Box sx={{ width: 480 }}>
            <Tabs
              value={value}
              onChange={(_, v) => setValue(v)}
              variant="fullWidth"
              aria-label="full width tabs"
            >
              <Tab id="tab-0" aria-controls="tabpanel-0" label="One" />
              <Tab id="tab-1" aria-controls="tabpanel-1" label="Two" />
              <Tab id="tab-2" aria-controls="tabpanel-2" label="Three" />
            </Tabs>
            <TabPanel value={value} index={value}>
              Panel {value + 1}
            </TabPanel>
          </Box>
        `,
      },
    },
  },
};
