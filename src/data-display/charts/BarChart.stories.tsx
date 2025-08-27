import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Paper, Typography } from "@mui/material";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { BarChart, BarPlot } from "@mui/x-charts/BarChart";
import { BarChartPro } from "@mui/x-charts-pro/BarChartPro";
import { ChartContainer } from "@mui/x-charts/ChartContainer";

const meta = {
  title: "DataDisplay/Charts/MUI Bar Demos",
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
          <Typography variant="caption">Legend</Typography>
          <GenerationInstructions.InsertOnly>
            {Story()}
          </GenerationInstructions.InsertOnly>
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

export const TinyBar: Story = {
  render: () => (
    <ChartContainer
      width={500}
      height={300}
      series={[{ data: allViews, label: "All", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Bar charts express quantities through a bar's length, using a common baseline.", // Bars overview
      },
      source: {
        code: `<BarChart height={120} xAxis={[{ scaleType: 'band', data: ['Mo','Tu','We','Th','Fr'] }]} series={[{ data: [4,2,5,3,6] }]} />`,
      },
    },
  },
};

export const TinyBarPro: Story = {
  render: () => (
    <Box sx={{ width: 600, height: 400 }}>
      <GenerationInstructions.InsertOnly>
        <BarChartPro
          xAxis={[{ data: xLabels, zoom: true }]}
          series={[
            { data: allViews, label: "All" },
            { data: uniqueViews, label: "Unique" },
          ]}
        />
      </GenerationInstructions.InsertOnly>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Bar charts express quantities through a bar's length, using a common baseline.", // Bars overview
      },
      source: {
        code: `<BarChartPro height={120} xAxis={[{ scaleType: 'band', data: ['Mo','Tu','We','Th','Fr'] }]} series={[{ data: [4,2,5,3,6], label: 'uv' }]} />`,
      },
    },
  },
};

export const SimpleBar_BarChart: Story = {
  render: () => (
    <BarChart
      height={300}
      series={[
        { data: uniqueViews, label: "pv", id: "pvId" },
        { data: allViews, label: "uv", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Bar charts series should contain a `data` property containing an array of values. You can specify bar ticks with the `xAxis` prop.",
      },
      source: {
        code: `<BarChart height={300} series={[{ data: uniqueViews, label: 'pv', id: 'pvId' }, { data: allViews, label: 'uv', id: 'uvId' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 50 }]} />`,
      },
    },
  },
};

export const SimpleBar_BarChartPro: Story = {
  render: () => (
    <BarChartPro
      height={300}
      series={[
        { data: uniqueViews, label: "pv", id: "pvId" },
        { data: allViews, label: "uv", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Bar charts series should contain a `data` property containing an array of values. You can specify bar ticks with the `xAxis` prop.",
      },
      source: {
        code: `<BarChartPro height={300} series={[{ data: uniqueViews, label: 'pv', id: 'pvId' }, { data: allViews, label: 'uv', id: 'uvId' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 50 }]} />`,
      },
    },
  },
};

export const StackedBar_BarChart: Story = {
  render: () => (
    <BarChart
      height={300}
      series={[
        { data: uniqueViews, label: "pv", id: "pvId", stack: "total" },
        { data: allViews, label: "uv", id: "uvId", stack: "total" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Each bar series can get a `stack` property expecting a string value. Series with the same `stack` will be stacked on top of each other.",
      },
      source: {
        code: `<BarChart height={300} series={[{ data: uniqueViews, label: 'pv', id: 'pvId', stack: 'total' }, { data: allViews, label: 'uv', id: 'uvId', stack: 'total' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 50 }]} />`,
      },
    },
  },
};

export const StackedBar_BarChartPro: Story = {
  render: () => (
    <BarChartPro
      height={300}
      series={[
        { data: uniqueViews, label: "pv", id: "pvId", stack: "total" },
        { data: allViews, label: "uv", id: "uvId", stack: "total" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Each bar series can get a `stack` property expecting a string value. Series with the same `stack` will be stacked on top of each other.",
      },
      source: {
        code: `<BarChartPro height={300} series={[{ data: uniqueViews, label: 'pv', id: 'pvId', stack: 'total' }, { data: allViews, label: 'uv', id: 'uvId', stack: 'total' }]} xAxis={[{ data: xLabels }]} yAxis={[{ width: 50 }]} />`,
      },
    },
  },
};

export const MixedBar_BarChart: Story = {
  render: () => (
    <BarChart
      height={300}
      series={[
        { data: uniqueViews, label: "pv", stack: "stack1" },
        { data: subscriptions, label: "amt" },
        { data: allViews, label: "uv", stack: "stack1" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  ),
  parameters: {
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

export const MixedBar_BarChartPro: Story = {
  render: () => (
    <BarChartPro
      height={300}
      series={[
        { data: uniqueViews, label: "pv", stack: "stack1" },
        { data: subscriptions, label: "amt" },
        { data: allViews, label: "uv", stack: "stack1" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 50 }]}
    />
  ),
  parameters: {
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

export const PosNeg_BarChart: Story = {
  render: () => (
    <BarChart
      height={300}
      series={[
        { data: uniqueViews, label: "pv" },
        { data: allViews, label: "uv" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 60, max: 10000 }]}
    />
  ),
  parameters: {
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

export const PosNeg_BarChartPro: Story = {
  render: () => (
    <BarChartPro
      height={300}
      series={[
        { data: uniqueViews, label: "pv" },
        { data: allViews, label: "uv" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 60, max: 10000 }]}
    />
  ),
  parameters: {
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

export const StackedBySign_BarChart: Story = {
  render: () => (
    <BarChart
      height={300}
      series={[
        { data: uniqueViews, label: "pv", id: "pvId", stack: "stack1" },
        { data: allViews, label: "uv", id: "uvId", stack: "stack1" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 60 }]}
    />
  ),
  parameters: {
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

export const StackedBySign_BarChartPro: Story = {
  render: () => (
    <BarChartPro
      height={300}
      series={[
        { data: uniqueViews, label: "pv", id: "pvId", stack: "stack1" },
        { data: allViews, label: "uv", id: "uvId", stack: "stack1" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 60 }]}
    />
  ),
  parameters: {
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

export const Biaxial_BarChart: Story = {
  render: () => (
    <BarChart
      height={300}
      series={[
        { data: uniqueViews, label: "pv", yAxisId: "left" },
        { data: allViews, label: "uv", yAxisId: "right" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[
        { id: "left", position: "left", width: 50 },
        { id: "right", position: "right" },
      ]}
    />
  ),
  parameters: {
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

export const Biaxial_BarChartPro: Story = {
  render: () => (
    <BarChartPro
      height={300}
      series={[
        { data: uniqueViews, label: "pv", yAxisId: "left" },
        { data: allViews, label: "uv", yAxisId: "right" },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[
        { id: "left", position: "left", width: 50 },
        { id: "right", position: "right" },
      ]}
    />
  ),
  parameters: {
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

const pyramid = [
  { age: "0-9", male: -4.2, female: 4.0 },
  { age: "10-19", male: -4.5, female: 4.3 },
  { age: "20-29", male: -5.1, female: 4.8 },
  { age: "30-39", male: -4.8, female: 4.6 },
  { age: "40-49", male: -4.2, female: 4.3 },
  { age: "50-59", male: -3.8, female: 4.1 },
];

export const PopulationPyramid_BarChart: Story = {
  render: () => (
    <BarChart
      height={320}
      dataset={pyramid}
      yAxis={[{ scaleType: "band", dataKey: "age" }]}
      series={[
        { dataKey: "male", label: "Male" },
        { dataKey: "female", label: "Female" },
      ]}
      layout="horizontal"
    />
  ),
  parameters: {
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

export const PopulationPyramid_BarChartPro: Story = {
  render: () => (
    <BarChartPro
      height={320}
      dataset={pyramid}
      yAxis={[{ scaleType: "band", dataKey: "age" }]}
      series={[
        { dataKey: "male", label: "Male" },
        { dataKey: "female", label: "Female" },
      ]}
      layout="horizontal"
    />
  ),
  parameters: {
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
