import type { Meta, StoryObj } from "@storybook/react-vite";
import Box from "@mui/material/Box";
import {
  DataGridPremium,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";

type DataGridProProps = {
  pageSize?: number;
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
};

const meta: Meta<DataGridProProps> = {
  title: "DataDisplay/DataGrids/DataGridPrenium",
  component: DataGridPremium,
  parameters: {
    layout: "fullscreen",
    studioMeta: {
      npmDeps: [{ name: "@mui/x-data-grid-premium" }, { name: "@mui/x-data-grid-generator" }],
    },
    docs: {
      description: {
        component:
          "The Premium plan includes all Pro features as well as more advanced features for data analysis and large dataset management, such as row grouping with aggregation functions (like sum and average) and the ability to export to Excel files. The demo below groups rows by commodity name, and uses an aggregation function to calculate the sum of quantities for each group and in total (displayed in a summary row). You can experiment with grouping other columns in the column header menus. You can also try exporting to Excel, and copying and pasting data to and from Excel tables.",
      },
    },
  },
  args: {
    pageSize: 5,
  },
};

export default meta;

type Story = StoryObj<DataGridProProps>;

const visibleFields = [
  "commodity",
  "quantity",
  "filledQuantity",
  "status",
  "isFilled",
  "unitPrice",
  "unitPriceCurrency",
  "subTotal",
  "feeRate",
  "feeAmount",
  "incoTerm",
];

export const Basic: Story = {
  render: () => {
    const { data, loading } = useDemoData({
      dataSet: "Commodity",
      rowLength: 100,
      editable: true,
      visibleFields,
    });
    const apiRef = useGridApiRef();

    const initialState = useKeepGroupedColumnsHidden({
      apiRef,
      initialState: {
        ...data.initialState,
        rowGrouping: {
          ...data.initialState?.rowGrouping,
          model: ["commodity"],
        },
        sorting: {
          sortModel: [
            { field: GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD, sort: "asc" },
          ],
        },
        aggregation: {
          model: {
            quantity: "sum",
          },
        },
      },
    });

    return (
      <Box sx={{ height: 520, width: "100%" }}>
        <DataGridPremium
          {...data}
          label="Data Grid Premium"
          apiRef={apiRef}
          loading={loading}
          disableRowSelectionOnClick
          initialState={initialState}
          showToolbar
        />
      </Box>
    );
  },
  args: {},
};
