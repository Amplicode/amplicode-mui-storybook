import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";

type DataGridProProps = {
  pageSize?: number;
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
};

const meta: Meta<DataGridProProps> = {
  title: "DataDisplay/DataGrids/DataGridPro",
  component: DataGridPro,
  parameters: {
    layout: "fullscreen",
    studioMeta: {
      npmDeps: [
        { name: "@mui/x-data-grid-pro" },
        { name: "@mui/x-data-grid-generator" },
      ],
    },
    docs: {
      description: {
        component:
          "The Pro plan expands on the Community version to support more complex use cases with features like advanced filtering, column pinning, column and row reordering, support for tree data, and virtualization to handle larger datasets.",
      },
    },
  },
  args: {
    pageSize: 5,
  },
};

export default meta;

type Story = StoryObj<DataGridProProps>;

export const Basic: Story = {
  render: () => {
    const { data, loading } = useDemoData({
      dataSet: "Employee",
      rowLength: 1000,
      editable: true,
      maxColumns: 20,
    });

    return (
      <Box sx={{ height: 520, width: "100%" }}>
        <DataGridPro
          // {...data}
          columns={data?.columns || []}
          rows={data.rows}
          loading={!data?.rows.length && loading}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
  },
  args: {},
};
