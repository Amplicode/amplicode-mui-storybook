import type { Meta, StoryObj } from "@storybook/react-vite";
import { PieChart } from "@mui/x-charts/PieChart";
import type { PieChartProps } from "@mui/x-charts/PieChart";

const meta: Meta<PieChartProps> = {
  title: "DataDisplay/Charts/PieChart",
  component: PieChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "PieChart visualizes parts of a whole using slices.",
      },
    },
    studioMeta: {
      npmDeps: [{ name: "@mui/x-charts", version: '8' }],
    },
  },
};

export default meta;

type Story = StoryObj<PieChartProps>;

const sampleData = [{ value: 10, label: 'A' }, { value: 15, label: 'B' }, { value: 20, label: 'C' }];

export const Basic: Story = {
  render: () => {
    return (
      <PieChart
        series={[
          {
            data: sampleData,
          },
        ]}
        width={400}
        height={300} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Basic PieChart with three slices and default styling.",
      },
    },
  },
};

export const WithHighlightedSlice: Story = {
  render: () => {
    return (
      <PieChart
        series={[
          {
            data: sampleData,
          },
        ]}
        width={400}
        height={300} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Highlights a slice on hover while fading out others.",
      },
    },
  },
};

export const DonutChart: Story = {
  render: () => {
    return (
      <PieChart
        series={[
          {
            data: sampleData,
            innerRadius: 60,
          },
        ]}
        width={400}
        height={300} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "PieChart with inner radius to create a donut effect.",
      },
    },
  },
};

export const WithCustomColors: Story = {
  render: () => {
    return (
      <PieChart
        series={[
          {
            data: sampleData,
            cx: 200,
            cy: 150,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        colors={['#FF6B6B', '#6BCB77', '#4D96FF']}
        width={400}
        height={300} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "PieChart with custom slice colors and rounded corners.",
      },
    },
  },
};

export const CustomLabels: Story = {
  render: () => {
    return (
      <PieChart
        series={[
          {
            data: sampleData,
            arcLabel: (item) => `${item.label} (${item.value})`,
          },
        ]}
        width={400}
        height={300} />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Adds custom arc labels with values.",
      },
    },
  },
};