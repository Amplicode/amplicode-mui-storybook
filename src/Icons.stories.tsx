import type { Meta, StoryObj } from "@storybook/react";
import {
  Grid,
  Typography,
  Stack,
  Box,
  TextField,
} from "@mui/material";
import * as icons from "@mui/icons-material";
import {
  CSSProperties,
  forwardRef,
  ReactElement,
  ReactNode,
  useDeferredValue,
  useState,
} from "react";
import { VirtuosoGrid } from "react-virtuoso";
import {
  Draggable,
  GenerationInstructions,
} from "@amplicode/storybook-extensions";

const meta = {
  title: "Icons",
  parameters: {
    iconName: "",
  },
  decorators: [],
} satisfies Meta<ReactElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (...args) => {
    const [meta] = args;
    const iconName = meta.parameters.iconName;
    const Icon = icons[iconName as keyof typeof icons];

    return (
      <Draggable
        data-proceed="generateComponent"
        data-component-name={iconName}
        data-component-package={"@mui/icons-material"}
        data-default-export={false}
      >
        <>
          <GenerationInstructions.InsertOnly>
            <Icon />
          </GenerationInstructions.InsertOnly>
          <Typography
            sx={{ width: "150px" }}
            align="center"
            variant="caption"
            noWrap
          >
            {iconName}
          </Typography>
        </>
      </Draggable>
    );
  },
  parameters: {
    studioMeta: {
      kind: "multiple",
    },
  },
  decorators: [
    (Story) => {
      const [query, setQuery] = useState("");
      const deferredQuery = useDeferredValue(query);
      const filteredIcons = Object.keys(icons).filter((icon) => {
        const regx = RegExp(`${deferredQuery}`, "i");
        return icon.match(regx);
      });

      const gridComponents = {
        List: forwardRef<
          HTMLDivElement,
          { style?: CSSProperties; children?: ReactNode }
        >(({ style, children, ...props }, ref) => {
          return (
            <Grid container ref={ref} {...props} style={style}>
              {children}
            </Grid>
          );
        }),

        Item: ({ children, ...props }: { children?: ReactNode }) => (
          <Grid size={{ xs: 4, md: 3, lg: 2, xl: 1 }} {...props}>
            {children}
          </Grid>
        ),
      };

      const ItemWrapper = ({ children, ...props }: any) => (
        <Stack direction={"column"} alignItems={"center"} padding={2}>
          {children}
        </Stack>
      );

      return (
        <Box height={"calc(100vh - 40px)"} width={"100%"}>
          <TextField
            variant="standard"
            size="small"
            label="Search"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(event.target.value);
            }}
          />
          <VirtuosoGrid
            data={filteredIcons}
            style={{ height: "calc(100% - 40px)" }}
            components={gridComponents}
            itemContent={(_index, iconName) => {
              return (
                <ItemWrapper>
                  {Story({
                    args: {
                      title: "test",
                      parameters: { iconName },
                    },
                  })}
                </ItemWrapper>
              );
            }}
          />
        </Box>
      );
    },
  ],
};
