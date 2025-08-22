import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Grid, Paper, Typography } from "@mui/material";
export const Content = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid container>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Box sx={{ mb: 4 }}>
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
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Paper sx={(theme) => ({
            p: 2,
            [theme.breakpoints.up('lg')]: {
              mx: 2,
            },
          })}>
            <Typography>Subscriptions</Typography>
            <PieChart
              series={[
                {
                  data: sampleData,
                },
              ]}
              width={400}
              height={300}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

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

const sampleData = [
  { value: 10, label: "A" },
  { value: 15, label: "B" },
  { value: 20, label: "C" },
];