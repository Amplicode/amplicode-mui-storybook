import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ThemeProvider,
  createTheme,
  PaletteOptions,
  alpha,
  darken,
  CssBaseline,
} from "@mui/material";
import { red, blue, grey, green } from "@mui/material/colors";
import { GenerationInstructions } from "@amplicode/storybook-extensions";
import { App } from "./ExampleApp";

const meta: Meta = {
  title: "Theming",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Wrap component into theme provider and add local theme",
      },
    },
  },
  tags: ["wrapper"],
};

export default meta;

type Story = StoryObj;

const alert = {
  error: { main: "#B57185" },
  warning: { main: "#F2CB05" },
  info: { main: "#39AEA9" },
  success: { main: "#00745F" },
};

const darkPalette: PaletteOptions = {
  mode: "dark" as "dark",
  primary: { main: "#f9fafb" },
  secondary: { main: "#a0a0a0" },
  background: { default: "#363D40" },
  ...alert,
};

const lightPalette: PaletteOptions = {
  mode: "light" as "light",
  primary: { main: "#00585C" },
  secondary: { main: "#64B4B8" },
  background: { default: "#f4f4f4" },
  text: { primary: "#212b36" },
  ...alert,
};

const createNanoTheme = (palette: PaletteOptions) => {
  const themeOptions = {
    palette,
    shape: { borderRadius: 0 },
    sidebar: {
      width: 200,
      closedWidth: 36,
    },
    spacing: 8,
    typography: {
      fontFamily: "Inter, sans-serif",
      fontSize: 12,
      h1: { fontSize: "7rem" },
      h2: { fontWeight: 400 },
      h3: { fontWeight: 500 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      button: { textTransform: undefined },
    },
  };
  const theme = createTheme(themeOptions);
  theme.components = {
    MuiAlert: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 1,
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
      },
      variants: [
        {
          props: {},
          style: {
            [theme.breakpoints.down("sm")]: { width: "100%" },
          },
        },
      ],
      styleOverrides: {
        root: {
          "& label+.MuiInput-root.MuiInputBase-root": {
            marginTop: theme.spacing(1.5),
          },
          "& label[data-shrink=false]+.MuiInput-root.MuiInputBase-root": {
            marginTop: 0,
            paddingBottom: theme.spacing(2),
          },
        },
        input: {
          padding: theme.spacing(0.5),
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "text" as const,
        size: "small" as const,
      },
      styleOverrides: {
        root: {
          paddingTop: theme.spacing(0.2),
          paddingBottom: theme.spacing(0.2),
        },
      },
      variants: [
        {
          props: { size: "small" as const },
          style: { fontSize: "1em" },
        },
      ],
    },
    MuiCard: {
      defaultProps: {
        square: true,
      },
    },
    MuiChip: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "standard" as const,
        margin: "dense" as const,
        size: "small" as const,
        fullWidth: true,
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense" as const,
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small" as const,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "label+&.MuiInputBase-root": {
            marginTop: theme.spacing(1.5),
          },
          "label[data-shrink=false]+&.MuiInputBase-root": {
            marginTop: 0,
            paddingBottom: theme.spacing(1.5),
          },
        },
        input: {
          padding: theme.spacing(0.5),
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(0.5),
        },
      },
      defaultProps: {
        margin: "dense" as const,
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          "&.MuiListItemIcon-root": {
            minWidth: theme.spacing(3.5),
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: theme.spacing(0.5),
          paddingBottom: theme.spacing(0.5),
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: "dense" as const,
      },
      styleOverrides: {
        input: {
          padding: 16,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: theme.shadows[1],
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "&.MuiTabs-root": {
            minHeight: theme.spacing(3.5),
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
            minHeight: theme.spacing(3.5),
            minWidth: theme.spacing(10),
          },
        },
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small" as const,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          "&.MuiTableCell-sizeSmall": {
            padding: theme.spacing(0.5),
          },
          "&.MuiTableCell-paddingNone": {
            padding: 0,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard" as const,
        margin: "dense" as const,
        size: "small" as const,
        fullWidth: true,
      },
      variants: [
        {
          props: {},
          style: {
            [theme.breakpoints.down("sm")]: { width: "100%" },
          },
        },
      ],
    },
    MuiToolbar: {
      defaultProps: {
        variant: "dense" as const,
      },
      styleOverrides: {
        root: {
          minHeight: theme.spacing(4.5),
        },
        regular: {
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  };
  return theme;
};

const studioTheme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[600],
          contrastText: "#fff",
        },
        secondary: {
          main: grey[800],
        },
        error: {
          main: red.A400,
        },
        success: {
          main: green[500],
        },
        background: {
          default: "#f7f9fc",
          paper: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: blue[400],
          contrastText: "#000",
        },
        secondary: {
          main: grey[300],
        },
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const houseAlert = {
  error: { main: "#DB488B" },
  warning: { main: "#8C701B" },
  info: { main: "#3ED0EB" },
  success: { main: "#0FBF9F" },
};

const houseDarkPalette: PaletteOptions = {
  primary: { main: "#ec7a77", light: "#fbcf33" },
  background: { default: "#363D40", paper: "#2B3033" },
  ...houseAlert,
  mode: "dark" as "dark",
};

const houseLightPalette: PaletteOptions = {
  primary: { main: "#344767", light: "#7928ca" },
  secondary: { main: "#f90283" },
  background: { default: "#f7f8f9", paper: "#ffffff" },
  ...houseAlert,
  mode: "light" as "light",
};

const createHouseTheme = (palette: PaletteOptions) => {
  const themeOptions = {
    shape: { borderRadius: 20 },
    sidebar: { width: 250 },
    spacing: 9,
    typography: { fontFamily: `'Open Sans', sans-serif` },
  };
  const theme = createTheme({
    colorSchemes: { light: { palette } },
    ...themeOptions,
  });
  theme.components = {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(darken("#000C57", 0.4), 0.2),
          backdropFilter: "blur(2px)",
          "&.MuiBackdrop-invisible": {
            backgroundColor: "transparent",
            backdropFilter: "blur(2px)",
          },
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense" as const,
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          transition: "color .2s",

          "&.MuiButtonBase-root": {
            minWidth: "auto",
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 4,
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            color: theme.palette.primary.contrastText,
            zIndex: 2,
          },
          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": { border: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
          "&.MuiTableCell-sizeSmall": {
            padding: theme.spacing(1.5),
          },
          "&.MuiTableCell-paddingNone": {
            padding: theme.spacing(0.5),
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 38,
          minHeight: 38,
          overflow: "visible",
        },
        indicator: {
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          border: `1px solid ${theme.palette.primary.light}`,
          boxShadow: theme.shadows[1],
        },
        scrollableX: {
          overflow: "visible !important",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
        fullWidth: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#f00!important",
          background: `linear-gradient(310deg, ${theme.palette.primary.light}, ${theme.palette.secondary.main})!important`,
          width: "100%!important",
          marginLeft: "0!important",
          "& .logo": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            background: "none!important",
            borderRight: "none",
            color: theme.palette.background.default,
          },
          "& .MuiButtonBase-root": {
            "&:hover": {
              boxShadow: `inset 0px 0px 2px 2px ${theme.palette.secondary.light}`,
            },
          },
        },
      },
    },
  };
  return theme;
};

const houseLightTheme = createHouseTheme(houseLightPalette);
const houseDarkTheme = createHouseTheme(houseDarkPalette);

export const StudioTheme: Story = {
  render: () => {
    return (
      <ThemeProvider theme={studioTheme}>
        <CssBaseline>
          <GenerationInstructions.Exclude>
            <App />
          </GenerationInstructions.Exclude>
        </CssBaseline>
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Wraps content in a ThemeProvider with a custom theme.",
      },
    },
  },
};

export const HouseTheme: Story = {
  render: () => {
    return (
      <ThemeProvider theme={houseLightTheme}>
        <CssBaseline>
          <GenerationInstructions.Exclude>
            <App />
          </GenerationInstructions.Exclude>
        </CssBaseline>
      </ThemeProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Wraps content in a ThemeProvider with a house theme.",
      },
    },
  },
};
