import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination, PaginationItem, Stack, TablePagination } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, MouseEvent, ChangeEvent } from "react";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>Pagination lets users move between pages of content. It supports controlled state, ranges, first/last buttons, sizes, colors, and custom items via <code>renderItem</code>.</p>`,
      },
    },
  },
  tags: ["pagination", "navigation"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [page, setPage] = useState(3);

    return (
      <Pagination
        count={10}
        page={page}
        color="primary"
        onChange={(_, value) => setPage(value)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
      source: {
        code: `
        const [page, setPage] = useState(3);

        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
        `,
      },
    },
  },
};

export const Ranges: Story = {
  render: () => {
    return (
      <Pagination count={15} siblingCount={2} boundaryCount={1} page={7} />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Control visible page numbers with `siblingCount` (adjacent pages) and `boundaryCount` (start/end pages).",
      },
      source: {
        code: `
          <Pagination count={15} siblingCount={0} boundaryCount={2} page={7} />
        `,
      },
    },
  },
};

export const CustomRenderItem: Story = {
  render: () => {
    return (
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: ArrowBackIcon,
              next: ArrowForwardIcon,
            }}
            {...item}
          />
        )}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `renderItem` to customize items. Here, `PaginationItem` replaces the default prev/next icons via `slots`.",
      },
      source: {
        code: `
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />`,
      },
    },
  },
};

export const DisabledAndBounds: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (
      event: MouseEvent<HTMLButtonElement> | null,
      newPage: number
    ) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disabled state and a controlled example with first/last navigation.",
      },
      source: {
        code: `
          const [page, setPage] = useState(2);
          const [rowsPerPage, setRowsPerPage] = useState(10);

          const handleChangePage = (
            event: MouseEvent<HTMLButtonElement> | null,
            newPage: number
          ) => {
            setPage(newPage);
          };

          const handleChangeRowsPerPage = (
            event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          };

          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        `,
      },
    },
  },
  tags: ["disabled", "controlled"],
};
