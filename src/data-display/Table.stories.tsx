import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Checkbox,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

type Dessert = { name: string; calories: number; fat: number; carbs: number; protein: number };

const rows: Dessert[] = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const meta = {
  title: "DataDisplay/Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          `<p>Tables display structured data in rows and columns. They support dense spacing, sticky headers, sorting, selection, expandable rows, and pagination. Compose with <code>TableContainer</code>, <code>TableHead</code>, <code>TableBody</code>, and related subcomponents.</p>`,
      },
    },
  },
  tags: ["table"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <TableContainer component={Paper} sx={{ width: 640 }}>
        <Table aria-label="basic table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.name}>
                <TableCell component="th" scope="row">{r.name}</TableCell>
                <TableCell align="right">{r.calories}</TableCell>
                <TableCell align="right">{r.fat}</TableCell>
                <TableCell align="right">{r.carbs}</TableCell>
                <TableCell align="right">{r.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  parameters: {
    docs: {
      description: { story: "A simple table with a header and body." },
      source: {
        code: `    <TableContainer component={Paper} sx={{ width: 640 }}>
      <Table aria-label="basic table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.name}>
              <TableCell component="th" scope="row">{r.name}</TableCell>
              <TableCell align="right">{r.calories}</TableCell>
              <TableCell align="right">{r.fat}</TableCell>
              <TableCell align="right">{r.carbs}</TableCell>
              <TableCell align="right">{r.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>`,
      },
    },
  },
};

export const Dense: Story = {
  render: () => {
    return (
      <TableContainer data-test={rows} component={Paper} sx={{ width: 640 }}>
        <Table size="small" aria-label="dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Cal</TableCell>
              <TableCell align="right">Fat</TableCell>
              <TableCell align="right">Carbs</TableCell>
              <TableCell align="right">Protein</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.name}>
                <TableCell>{r.name}</TableCell>
                <TableCell align="right">{r.calories}</TableCell>
                <TableCell align="right">{r.fat}</TableCell>
                <TableCell align="right">{r.carbs}</TableCell>
                <TableCell align="right">{r.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  parameters: {
    docs: {
      description: { story: "Compact density reduces row height using `size=\"small\"`." },
      source: {
        code: `    <TableContainer component={Paper} sx={{ width: 640 }}>
      <Table size="small" aria-label="dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Cal</TableCell>
            <TableCell align="right">Fat</TableCell>
            <TableCell align="right">Carbs</TableCell>
            <TableCell align="right">Protein</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.name}>
              <TableCell>{r.name}</TableCell>
              <TableCell align="right">{r.calories}</TableCell>
              <TableCell align="right">{r.fat}</TableCell>
              <TableCell align="right">{r.carbs}</TableCell>
              <TableCell align="right">{r.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>`,
      },
    },
  },
};

export const StickyHeader: Story = {
  render: () => {
    return (
      <TableContainer component={Paper} sx={{ width: 640, maxHeight: 260 }}>
        <Table stickyHeader aria-label="sticky header table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 20 }).map((_, i) => {
              const r = rows[i % rows.length];
              return (
                <TableRow key={`${r.name}-${i}`}>
                  <TableCell>{r.name} #{i + 1}</TableCell>
                  <TableCell align="right">{r.calories}</TableCell>
                  <TableCell align="right">{r.fat}</TableCell>
                  <TableCell align="right">{r.carbs}</TableCell>
                  <TableCell align="right">{r.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  parameters: {
    docs: {
      description: { story: "Use `stickyHeader` with a scrollable `TableContainer` to keep headers visible." },
      source: {
        code: `<TableContainer component={Paper} sx={{ width: 640, maxHeight: 260 }}>
      <Table stickyHeader aria-label="sticky header table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 20 }).map((e, i) => {
            const r = rows[i % rows.length];
            return (
              <TableRow key={e}>
                <TableCell>{r.name} #{i + 1}</TableCell>
                <TableCell align="right">{r.calories}</TableCell>
                <TableCell align="right">{r.fat}</TableCell>
                <TableCell align="right">{r.carbs}</TableCell>
                <TableCell align="right">{r.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>`,
      },
    },
  },
};

type Order = "asc" | "desc";
function sortComparator<Key extends keyof Dessert>(key: Key, order: Order) {
  return (a: Dessert, b: Dessert) => {
    const v1 = a[key], v2 = b[key];
    const res = v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    return order === "asc" ? res : -res;
  };
}
export const Sortable: Story = {
  render: () => {
    const [orderBy, setOrderBy] = useState<keyof Dessert>("calories");
    const [order, setOrder] = useState<Order>("asc");
    const handleSort = (key: keyof Dessert) => {
      setOrderBy(key);
      setOrder((prev) => (orderBy === key ? (prev === "asc" ? "desc" : "asc") : "asc"));
    };
    const sorted = [...rows].sort(sortComparator(orderBy, order));

    const headCell = (id: keyof Dessert, label: string, align?: "right") => (
      <TableCell key={String(id)} align={align}>
        <TableSortLabel
          active={orderBy === id}
          direction={orderBy === id ? order : "asc"}
          onClick={() => handleSort(id)}
        >
          {label}
        </TableSortLabel>
      </TableCell>
    );

    return (
      <TableContainer component={Paper} sx={{ width: 640 }}>
        <Table aria-label="sortable table">
          <TableHead>
            <TableRow>
              {headCell("name", "Dessert")}
              {headCell("calories", "Calories", "right")}
              {headCell("fat", "Fat (g)", "right")}
              {headCell("carbs", "Carbs (g)", "right")}
              {headCell("protein", "Protein (g)", "right")}
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map((r) => (
              <TableRow key={r.name} hover>
                <TableCell>{r.name}</TableCell>
                <TableCell align="right">{r.calories}</TableCell>
                <TableCell align="right">{r.fat}</TableCell>
                <TableCell align="right">{r.carbs}</TableCell>
                <TableCell align="right">{r.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  parameters: {
    docs: {
      description: { story: "Enable interactive column sorting with `TableSortLabel` and controlled state." },
      source: {
        code: `
          const [orderBy, setOrderBy] = useState<keyof Dessert>("calories");
          const [order, setOrder] = useState<Order>("asc");
          const handleSort = (key: keyof Dessert) => {
            setOrderBy(key);
            setOrder((prev) => (orderBy === key ? (prev === "asc" ? "desc" : "asc") : "asc"));
          };
          const sorted = [...rows].sort(sortComparator(orderBy, order));

          const headCell = (id: keyof Dessert, label: string, align?: "right") => (
            <TableCell key={String(id)} align={align}>
              <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : "asc"}
                onClick={() => handleSort(id)}
              >
                {label}
              </TableSortLabel>
            </TableCell>
          );

          <TableContainer component={Paper} sx={{ width: 640 }}>
            <Table aria-label="sortable table">
              <TableHead>
                <TableRow>
                  {headCell("name", "Dessert")}
                  {headCell("calories", "Calories", "right")}
                  {headCell("fat", "Fat (g)", "right")}
                  {headCell("carbs", "Carbs (g)", "right")}
                  {headCell("protein", "Protein (g)", "right")}
                </TableRow>
              </TableHead>
              <TableBody>
                {sorted.map((r) => (
                  <TableRow key={r.name} hover>
                    <TableCell>{r.name}</TableCell>
                    <TableCell align="right">{r.calories}</TableCell>
                    <TableCell align="right">{r.fat}</TableCell>
                    <TableCell align="right">{r.carbs}</TableCell>
                    <TableCell align="right">{r.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        `,
      },
    },
  },
};

export const SelectableRows: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const allSelected = selected.length === rows.length;
    const someSelected = selected.length > 0 && !allSelected;

    const toggleAll = (checked: boolean) =>
      setSelected(checked ? rows.map((r) => r.name) : []);
    const toggleOne = (name: string) =>
      setSelected((prev) =>
        prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
      );

    return (
      <TableContainer component={Paper} sx={{ width: 640 }}>
        <Table aria-label="selectable table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={someSelected}
                  checked={allSelected}
                  onChange={(e) => toggleAll(e.target.checked)}
                  inputProps={{ "aria-label": "select all desserts" }}
                />
              </TableCell>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => {
              const isSel = selected.includes(r.name);
              return (
                <TableRow key={r.name} hover selected={isSel}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSel}
                      onChange={() => toggleOne(r.name)}
                      inputProps={{ "aria-labelledby": `label-${r.name}` }}
                    />
                  </TableCell>
                  <TableCell id={`label-${r.name}`}>{r.name}</TableCell>
                  <TableCell align="right">{r.calories}</TableCell>
                  <TableCell align="right">{r.fat}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  parameters: {
    docs: {
      description: { story: "Manage selection state with header and row checkboxes." },
      source: {
        code: `
          <TableContainer component={Paper} sx={{ width: 640 }}>
        <Table aria-label="selectable table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={someSelected}
                  checked={allSelected}
                  onChange={(e) => toggleAll(e.target.checked)}
                  inputProps={{ "aria-label": "select all desserts" }}
                />
              </TableCell>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => {
              const isSel = selected.includes(r.name);
              return (
                <TableRow key={r.name} hover selected={isSel}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSel}
                      onChange={() => toggleOne(r.name)}
                      inputProps={{ "aria-labelledby": \`label-\${r.name}\` }}
                    />
                  </TableCell>
                  <TableCell id={\`label-\${r.name}}\`>{r.name}</TableCell>
                  <TableCell align="right">{r.calories}</TableCell>
                  <TableCell align="right">{r.fat}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
        `,
      },
    },
  },
};

type CollapsibleRow = Dessert & { history: { date: string; amount: number }[] };
const complexRows: CollapsibleRow[] = rows.map((r, i) => ({
  ...r,
  history: [
    { date: "2025-09-01", amount: 3 + i },
    { date: "2025-09-08", amount: 1 + i },
  ],
}));

export const CollapsibleRows: Story = {
  render: () => {
    const [open, setOpen] = useState<Record<string, boolean>>({});
    const toggle = (key: string) =>
      setOpen((s) => ({ ...s, [key]: !s[key] }));

    return (
      <TableContainer component={Paper} sx={{ width: 720 }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complexRows.map((r) => (
              <span key={r.name}>
                <TableRow hover>
                  <TableCell width={48}>
                    <IconButton size="small" onClick={() => toggle(r.name)} aria-label="expand row">
                      {open[r.name] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">{r.name}</TableCell>
                  <TableCell align="right">{r.calories}</TableCell>
                  <TableCell align="right">{r.protein}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4} sx={{ py: 0 }}>
                    <Collapse in={!!open[r.name]} timeout="auto" unmountOnExit>
                      <Box sx={{ m: 1 }}>
                        <Typography variant="subtitle2" gutterBottom component="div">
                          History
                        </Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Date</TableCell>
                              <TableCell align="right">Amount</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {r.history.map((h) => (
                              <TableRow key={h.date}>
                                <TableCell>{h.date}</TableCell>
                                <TableCell align="right">{h.amount}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </span>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  parameters: {
    docs: {
      description: { story: "Reveal nested content per row using `Collapse` and an expand icon." },
      source: {
        code: `
        const [open, setOpen] = useState<Record<string, boolean>>({});
        const toggle = (key: string) =>
        setOpen((s) => ({ ...s, [key]: !s[key] }));

        <TableContainer component={Paper} sx={{ width: 720 }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Dessert</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {complexRows.map((r) => (
                <Fragment key={r.name}>
                  <TableRow hover>
                    <TableCell width={48}>
                      <IconButton size="small" onClick={() => toggle(r.name)} aria-label="expand row">
                        {open[r.name] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">{r.name}</TableCell>
                    <TableCell align="right">{r.calories}</TableCell>
                    <TableCell align="right">{r.protein}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} sx={{ py: 0 }}>
                      <Collapse in={!!open[r.name]} timeout="auto" unmountOnExit>
                        <Box sx={{ m: 1 }}>
                          <Typography variant="subtitle2" gutterBottom component="div">
                            History
                          </Typography>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell align="right">Amount</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {r.history.map((h) => (
                                <TableRow key={h.date}>
                                  <TableCell>{h.date}</TableCell>
                                  <TableCell align="right">{h.amount}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>`,
      },
    },
  },
};

export const WithPagination: Story = {
  render: () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const data = Array.from({ length: 23 }).map((_, i) => ({
      ...rows[i % rows.length],
      name: `${rows[i % rows.length].name} #${i + 1}`,
    }));
    const paged = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
      <TableContainer component={Paper} sx={{ width: 640 }}>
        <Table aria-label="pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paged.map((r) => (
              <TableRow key={r.name}>
                <TableCell>{r.name}</TableCell>
                <TableCell align="right">{r.calories}</TableCell>
                <TableCell align="right">{r.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={data.length}
                page={page}
                onPageChange={(_, p) => setPage(p)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(e) => {
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setPage(0);
                }}
                rowsPerPageOptions={[3, 5, 10]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  },
  parameters: {
    docs: {
      description: { story: "Combine `TablePagination` with controlled `page` and `rowsPerPage`." },
      source: {
        code: `
          const [page, setPage] = useState(0);
          const [rowsPerPage, setRowsPerPage] = useState(3);
          const data = Array.from({ length: 23 }).map((_, i) => ({
            ...rows[i % rows.length],
            name: \`\${rows[i % rows.length].name} #\${i + 1}\`,
          }));
          const paged = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

          <TableContainer component={Paper} sx={{ width: 640 }}>
          <Table aria-label="pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paged.map((r) => (
                <TableRow key={r.name}>
                  <TableCell>{r.name}</TableCell>
                  <TableCell align="right">{r.calories}</TableCell>
                  <TableCell align="right">{r.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={data.length}
                  page={page}
                  onPageChange={(_, p) => setPage(p)}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={(e) => {
                    setRowsPerPage(parseInt(e.target.value, 10));
                    setPage(0);
                  }}
                  rowsPerPageOptions={[3, 5, 10]}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>`,
      },
    },
  },
};