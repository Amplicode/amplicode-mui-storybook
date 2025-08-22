import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '@mui/x-charts/LineChart';
import type { LineChartProps } from '@mui/x-charts/LineChart';

const meta: Meta<LineChartProps> = {
  title: 'DataDisplay/Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'LineChart visualizes data trends over time or continuous values.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<LineChartProps>;

const xData = Array.from({ length: 10 }, (_, i) => i);
const yData1 = xData.map((x) => Math.exp(x) * 10);
const yData2 = xData.map((x) => Math.sin(x * 2) * 10);

export const Basic: Story = {
  render: () => (
    <LineChart
      xAxis={[{ data: xData, scaleType: 'linear' }]}
      series={[{ data: yData1 }]}
      width={500}
      height={300}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'A simple line chart with a single data series.',
      },
    },
  },
};

export const MultipleSeries: Story = {
  render: () => (
    <LineChart
      xAxis={[{ data: xData, scaleType: 'linear' }]}
      series={[
        { data: yData1, label: 'sin(x)' },
        { data: yData2, label: 'cos(x)' },
      ]}
      width={500}
      height={300}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays multiple data series with legend labels.',
      },
    },
  },
};

export const WithAxisLabels: Story = {
  render: () => (
    <LineChart
      xAxis={[{ data: xData, label: 'X Axis' }]}
      yAxis={[{ label: 'Y Axis' }]}
      series={[{ data: yData1, label: 'sin(x)' }]}
      width={500}
      height={300}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Adds axis labels for clarity.',
      },
    },
  },
};

export const AreaChart: Story = {
  render: () => (
    <LineChart
      xAxis={[{ data: xData }]}
      series={[{ data: yData1, area: true, label: 'sin(x)' }]}
      width={500}
      height={300}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Enables area fill under the line for a single series.',
      },
    },
  },
};

export const CustomColorsAndCurve: Story = {
  render: () => (
    <LineChart
      xAxis={[{ data: xData }]}
      series={[
        {
          data: yData1,
          label: 'sin(x)',
          color: '#1976d2',
          curve: 'monotoneX',
        },
      ]}
      width={500}
      height={300}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Line chart with custom color and smooth curve.',
      },
    },
  },
};