import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Paper, Typography } from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { BarChart } from "@mui/x-charts/BarChart";
import { BarChartPro } from "@mui/x-charts-pro/BarChartPro";

const generateDataSet = () => {
  return [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: "Jan",
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: "Feb",
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: "Mar",
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: "Apr",
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: "May",
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: "June",
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: "July",
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: "Aug",
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: "Sept",
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: "Oct",
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: "Nov",
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: "Dec",
    },
  ];
};

const meta = {
  title: "DataDisplay/Charts/BarChart",
  component: BarChart as any,
  argTypes: {
    xAxis: {
      options: ["AddZoom"],
      mapping: { AddZoom: [{ zoom: true }] },
      type: "merge" as any,
    },
    dataset: {
      options: ["generateData"],
      mapping: { generateData: generateDataSet },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A collection of Bar chart demos mirrored from the MUI X docs.",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Paper sx={{ p: 2 }}>
          <Box sx={{ width: 600, height: 400 }}>
            <Typography variant="caption">Legend</Typography>
            <GenerationInstructions.InsertOnly>
              {Story()}
            </GenerationInstructions.InsertOnly>
          </Box>
        </Paper>
      );
    },
  ],
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const xLabels = [
  "Google",
  "Youtube",
  "Instagram",
  "Facebook",
  "TikTok",
  "Snapchat",
];

const allViews = [4000, 3000, 2000, 2780, 1890, 2390];
const uniqueViews = [2400, 1398, 9800, 3908, 4800, 3800];
const subscriptions = [2400, 2210, 2290, 2000, 2181, 2500];

export const SimpleBarChart: Story = {
  render: () => {
    const series = [
      { data: uniqueViews, label: "All" },
      { data: allViews, label: "Unique" },
    ];

    return (
      <BarChart
        series={series}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 100 }, { width: 50 }]}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts" }],
    },
    docs: {
      description: {
        story:
          "Bar charts series should contain a `data` property containing an array of values. You can specify bar ticks with the `xAxis` prop.",
      },
      source: {
        code: `
        const allViews = [...];
        const uniqueViews = [...];
        const xLabels = [...];

        <BarChart
          xAxis={[{ data: xLabels }]}
          series={[
            { data: allViews, label: "All" },
            { data: uniqueViews, label: "Unique" },
          ]}
        />`,
      },
    },
  },
};

export const SimpleBarChartPro: Story = {
  render: () => {
    const series = [
      { data: uniqueViews, label: "All" },
      { data: allViews, label: "Unique" },
    ];

    return (
      <BarChartPro
        xAxis={[{ data: xLabels, zoom: true }]}
        yAxis={[{ width: 50 }]}
        series={series}
        showToolbar
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts-pro" }, { name: "rasterizehtml" }],
    },
    docs: {
      description: {
        story:
          "Pro version of simple BarChart includes zoom and export features.",
      },
      source: {
        code: `
        const allViews = [...];
        const uniqueViews = [...];
        const xLabels = [...];

        <BarChartPro
          xAxis={[{ data: xLabels }]}
          series={[
            { data: allViews, label: "All" },
            { data: uniqueViews, label: "Unique" },
          ]}
          showToolbar
        />`,
      },
    },
  },
};

export const StackedBarChart: Story = {
  render: () => {
    return (
      <BarChart
        height={300}
        series={[
          { data: allViews, label: "All", stack: "total" },
          { data: uniqueViews, label: "Unique", stack: "total" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts" }],
    },
    docs: {
      description: {
        story:
          "Each bar series can get a `stack` property expecting a string value. Series with the same `stack` will be stacked on top of each other.",
      },
      source: {
        code: `
          const allViews = [...];
          const uniqueViews = [...];
          const xLabels = [...];

          <BarChart
            height={300}
            series={[
              { data: allViews, label: "All", stack: "total" },
              { data: uniqueViews, label: "Unique", stack: "total" },
            ]}
            xAxis={[{ data: xLabels }]}
            yAxis={[{ width: 50 }]}
          />
        `,
      },
    },
  },
};

export const StackedBarChartPro: Story = {
  render: () => {
    return (
      <BarChartPro
        height={300}
        series={[
          { data: allViews, label: "All", stack: "total" },
          { data: uniqueViews, label: "Unique", stack: "total" },
        ]}
        xAxis={[{ data: xLabels, zoom: true }]}
        yAxis={[{ width: 50 }]}
        showToolbar
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts-pro" }, { name: "rasterizehtml" }],
    },
    docs: {
      description: {
        story:
          "Each bar series can get a `stack` property expecting a string value. Series with the same `stack` will be stacked on top of each other.",
      },
      source: {
        code: `
          const allViews = [...];
          const uniqueViews = [...];
          const xLabels = [...];

          <BarChartPro
            height={300}
            series={[
              { data: allViews, label: "All", stack: "total" },
              { data: uniqueViews, label: "Unique", stack: "total" },
            ]}
            xAxis={[{ data: xLabels }]}
            yAxis={[{ width: 50 }]}
          />
        `,
      },
    },
  },
};

export const MixedBarChart: Story = {
  render: () => {
    return (
      <BarChart
        height={300}
        series={[
          { data: uniqueViews, label: "Unique", stack: "stack1" },
          { data: allViews, label: "All", stack: "stack1" },
          { data: subscriptions, label: "Subscriptions" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts" }],
    },
    docs: {
      description: {
        story: "Creating advanced custom charts by composing building blocks.",
      },
      source: {
        code: `<BarChart height={300} series={[{ data: uniqueViews, label: 'pv', stack: 'stack1' }, { data: subscriptions, label: 'amt' }, { data: allViews, label: 'uv', stack: 'stack1' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 50 }]} />`,
      },
    },
  },
};

export const MixedBarChartPro: Story = {
  render: () => {
    return (
      <BarChartPro
        height={300}
        series={[
          { data: uniqueViews, label: "Unique", stack: "stack1" },
          { data: allViews, label: "All", stack: "stack1" },
          { data: subscriptions, label: "Subscriptions" },
        ]}
        xAxis={[{ data: xLabels, zoom: true }]}
        yAxis={[{ width: 50 }]}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts-pro" }, { name: "rasterizehtml" }],
    },
    docs: {
      description: {
        story: "Creating advanced custom charts by composing building blocks.",
      },
      source: {
        code: `<BarChartPro height={300} series={[{ data: uniqueViews, label: 'pv', stack: 'stack1' }, { data: subscriptions, label: 'amt' }, { data: allViews, label: 'uv', stack: 'stack1' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 50 }]} />`,
      },
    },
  },
};

const subscribers = [2400, 2210, -2290, 2000, 2181, -2500];

export const PositiveAndNegativeBarChart: Story = {
  render: () => {
    return (
      <BarChart
        height={300}
        series={[
          { data: uniqueViews, label: "All" },
          { data: subscribers, label: "Subscriptions" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 60, max: 10000 }]}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts" }],
    },
    docs: {
      description: {
        story:
          "By default, they are stacked in the order you defined them, with positive values stacked above 0 and negative values stacked below 0.",
      },
      source: {
        code: `<BarChart height={300} series={[{ data: uniqueViews, label: 'pv' }, { data: allViews, label: 'uv' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 60, max: 10000 }]} />`,
      },
    },
  },
};

export const PositiveAndNegativeBarChartPro: Story = {
  render: () => {
    return (
      <BarChartPro
        height={300}
        series={[
          { data: uniqueViews, label: "All" },
          { data: subscribers, label: "Subscriptions" },
        ]}
        xAxis={[{ data: xLabels, zoom: true }]}
        yAxis={[{ width: 60, max: 10000 }]}
        showToolbar
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts-pro" }, { name: "rasterizehtml" }],
    },
    docs: {
      description: {
        story:
          "By default, they are stacked in the order you defined them, with positive values stacked above 0 and negative values stacked below 0.",
      },
      source: {
        code: `<BarChartPro height={300} series={[{ data: uniqueViews, label: 'pv' }, { data: allViews, label: 'uv' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 60, max: 10000 }]} />`,
      },
    },
  },
};

export const StackedBySignBarChart: Story = {
  render: () => {
    return (
      <BarChart
        height={300}
        series={[
          { data: subscribers, label: "Subscriptions", stack: "stack1" },
          { data: allViews, label: "All", stack: "stack1" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 60 }]}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts" }],
    },
    docs: {
      description: {
        story:
          "Each bar series can get a `stack` property expecting a string value. Series with the same `stack` will be stacked on top of each other.",
      },
      source: {
        code: `<BarChart height={300} series={[{ data: uniqueViews, label: 'pv', id: 'pvId', stack: 'stack1' }, { data: allViews, label: 'uv', id: 'uvId', stack: 'stack1' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 60 }]} />`,
      },
    },
  },
};

export const StackedBySignBarChartPro: Story = {
  render: () => {
    return (
      <BarChartPro
        height={300}
        series={[
          { data: subscribers, label: "Subscriptions", stack: "stack1" },
          { data: allViews, label: "All", stack: "stack1" },
        ]}
        xAxis={[{ data: xLabels, zoom: true }]}
        yAxis={[{ width: 60 }]}
        showToolbar
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts-pro" }, { name: "rasterizehtml" }],
    },
    docs: {
      description: {
        story:
          "Each bar series can get a `stack` property expecting a string value. Series with the same `stack` will be stacked on top of each other.",
      },
      source: {
        code: `<BarChartPro height={300} series={[{ data: uniqueViews, label: 'pv', id: 'pvId', stack: 'stack1' }, { data: allViews, label: 'uv', id: 'uvId', stack: 'stack1' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 60 }]} />`,
      },
    },
  },
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const revenueK = [120, 140, 110, 160, 170, 150];
const orders = [320, 280, 340, 300, 360, 330];

export const BiaxialBarChart: Story = {
  render: () => {
    return (
      <BarChart
        height={320}
        xAxis={[{ data: months }]}
        yAxis={[
          { id: "left", position: "left", label: "Revenue (k$)", min: 0 },
          { id: "right", position: "right", label: "Orders (pcs)", min: 0 },
        ]}
        series={[
          { data: revenueK, label: "Revenue", yAxisId: "left" },
          { data: orders, label: "Orders", yAxisId: "right" },
        ]}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts" }],
    },
    docs: {
      description: {
        story:
          "You can display multiple axes on the same side. If two or more axes share the same position, they are displayed in the order they are defined.",
      },
      source: {
        code: `<BarChart height={300} series={[{ data: uniqueViews, label: 'pv', yAxisId: 'left' }, { data: allViews, label: 'uv', yAxisId: 'right' }]} xAxis={[{ data: xLabels }]} yAxis={[{ id: 'left', position: 'left', width: 50 }, { id: 'right', position: 'right' }]} />`,
      },
    },
  },
};

export const BiaxialBarChartPro: Story = {
  render: () => {
    return (
      <BarChartPro
        height={320}
        xAxis={[{ data: months }]}
        yAxis={[
          { id: "left", position: "left", label: "Revenue (k$)", min: 0 },
          { id: "right", position: "right", label: "Orders (pcs)", min: 0 },
        ]}
        series={[
          { data: revenueK, label: "Revenue", yAxisId: "left" },
          { data: orders, label: "Orders", yAxisId: "right" },
        ]}
        showToolbar
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts-pro" }, { name: "rasterizehtml" }],
    },
    docs: {
      description: {
        story:
          "You can display multiple axes on the same side. If two or more axes share the same position, they are displayed in the order they are defined.",
      },
      source: {
        code: `<BarChartPro height={300} series={[{ data: uniqueViews, label: 'pv', yAxisId: 'left' }, { data: allViews, label: 'uv', yAxisId: 'right' }]} xAxis={[{ data: xLabels }]} yAxis={[{ id: 'left', position: 'left', width: 50 }, { id: 'right', position: 'right' }]} />`,
      },
    },
  },
};

const ageGroups = [
  "100+ yrs",
  "95-99 yrs",
  "90-94 yrs",
  "85-89 yrs",
  "80-84 yrs",
  "75-79 yrs",
  "70-74 yrs",
  "65-69 yrs",
  "60-64 yrs",
  "55-59 yrs",
  "50-54 yrs",
  "45-49 yrs",
  "40-44 yrs",
  "35-39 yrs",
  "30-34 yrs",
  "25-29 yrs",
  "20-24 yrs",
  "15-19 yrs",
  "10-14 yrs",
  "5-9 yrs",
  "0-4 yrs",
];

const male = [
  1139, 8291, 50323, 201240, 476263, 696606, 1012668, 1478069, 2042614, 2068112,
  2258061, 2061862, 2067075, 1808706, 1796779, 1933726, 1620461, 1183580,
  1189663, 1097221, 766227,
];

const female = [
  5770, 36739, 168603, 445118, 762492, 899933, 1152098, 1585781, 2105499,
  2045845, 2231491, 2000130, 1967944, 1673805, 1593655, 1695058, 1484776,
  1104293, 1122176, 1044863, 727814,
];

export const PopulationPyramidBarChart: Story = {
  render: () => {
    const numberWithSuffixFormatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
    });

    return (
      <BarChart
        yAxis={[
          {
            data: ageGroups,
            disableLine: true,
            disableTicks: true,
            width: 100,
          },
        ]}
        series={[
          { data: male.map((m) => -m), label: "Male", stack: "stack" },
          { data: female, label: "Female", stack: "stack" },
        ]}
        xAxis={[
          {
            valueFormatter: (population: number) =>
              numberWithSuffixFormatter.format(Math.abs(population)),
          },
        ]}
        layout="horizontal"
        grid={{ vertical: true }}
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts" }],
    },
    docs: {
      description: {
        story:
          'Bar charts can be rendered with a horizontal layout by providing the `layout="horizontal"` prop. By default, positive values are stacked above 0 and negative values below 0.',
      },
      source: {
        code: `<BarChart height={320} dataset={pyramid} yAxis={[{ scaleType: 'band', dataKey: 'age' }]} series={[{ dataKey: 'male', label: 'Male' }, { dataKey: 'female', label: 'Female' }]} layout="horizontal" />`,
      },
    },
  },
};

export const PopulationPyramiBarChartdPro: Story = {
  render: () => {
    const numberWithSuffixFormatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
    });
    return (
      <BarChartPro
        yAxis={[
          {
            data: ageGroups,
            disableLine: true,
            disableTicks: true,
            width: 100,
            zoom: true,
          },
        ]}
        series={[
          { data: male.map((m) => -m), label: "Male", stack: "stack" },
          { data: female, label: "Female", stack: "stack" },
        ]}
        xAxis={[
          {
            valueFormatter: (population: number) =>
              numberWithSuffixFormatter.format(Math.abs(population)),
            // zoom: true
          },
        ]}
        layout="horizontal"
        grid={{ vertical: true }}
        showToolbar
      />
    );
  },
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts-pro" }, { name: "rasterizehtml" }],
    },
    docs: {
      description: {
        story:
          'Bar charts can be rendered with a horizontal layout by providing the `layout="horizontal"` prop. By default, positive values are stacked above 0 and negative values below 0.',
      },
      source: {
        code: `<BarChartPro height={320} dataset={pyramid} yAxis={[{ scaleType: 'band', dataKey: 'age' }]} series={[{ dataKey: 'male', label: 'Male' }, { dataKey: 'female', label: 'Female' }]} layout="horizontal" />`,
      },
    },
  },
};
