import type { Meta, StoryObj } from "@storybook/react";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { TextField, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const meta: Meta = {
  title: "Inputs/DatePickers/DateRangePicker",
  component: DateRangePicker,
  parameters: {
    studioMeta: {
      npmDeps: [{ name: "@mui/x-date-pickers-pro" }, { name: "dayjs" }],
    },
    docs: {
      description: {
        component: `The <code>DateRangePicker</code> component allows users to select a start and end date.
          <p>It supports localization, validation, and keyboard interactions.</p>
          <p>This example shows the basic usage with <code>TextField</code> inputs and controlled state.</p>`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Pure: Story = {
  render: () => {
    const [value, setValue] = useState<[Dayjs | null, Dayjs | null]>();

    return (
      <DateRangePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic controlled `DateRangePicker` with text inputs.",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: 300 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {Story()}
          </LocalizationProvider>
        </Box>
      );
    },
  ],
};

export const WithLocalizationProvider: Story = {
  render: () => {
    const [value, setValue] = useState<[Dayjs | null, Dayjs | null]>();

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "`DateRangePicker` wrapped with `LocalizationProvider`",
      },
    },
  },
  decorators: [
    (Story) => {
      return <Box sx={{ width: 300 }}>{Story()}</Box>;
    },
  ],
};
