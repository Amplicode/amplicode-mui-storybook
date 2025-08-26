import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";

type DataGridProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSize?: number;
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
};

const meta: Meta<DataGridProps> = {
  title: "DataDisplay/DataGrids/DataGrid",
  component: DataGrid,
  parameters: {
    layout: "fullscreen",
    studioMeta: {
      npmDeps: [{ name: "@mui/x-data-grid" }],
    },
    docs: {
      description: {
        component:
          "The MIT-licensed Community version of the Data Grid is a more sophisticated implementation of the Material UI Table. It includes all of the main features listed in the navigation menu, such as editing, sorting, filtering, and pagination, as shown in the demo below",
      },
    },
  },
  args: {
    pageSize: 5,
  },
};

export default meta;

type Story = StoryObj<DataGridProps>;

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const Basic: Story = {
  render: ({ rows, columns }) => {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    );
  },
  args: {
    rows: rows,
    columns: columns,
  },
  parameters: {
    docs: {
      description: {
        story: "Basic data grid with pagination.",
      },
    },
  },
};
