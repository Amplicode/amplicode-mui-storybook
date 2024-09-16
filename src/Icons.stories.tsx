import type { Meta, StoryObj } from "@storybook/react";
import {
  Grid,
  Typography,
  Stack,
  Box,
  Tooltip,
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

const meta = {
  title: "Icons",
  parameters: {
    // layout: "centered",
  },
  decorators: [],
} satisfies Meta<ReactElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
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
        <Grid item xs={4} md={3} lg={2} xl={1} {...props}>
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
            const Icon = icons[iconName as keyof typeof icons];

            return (
              <ItemWrapper>
                <div draggable data-amplicode-dnd={iconName}>
                  <Icon sx={{ cursor: "pointer" }} />
                </div>
                <Tooltip title={iconName} placement="top">
                  <Typography
                    sx={{ width: "150px" }}
                    align="center"
                    variant="caption"
                    noWrap
                  >
                    {iconName}
                  </Typography>
                </Tooltip>
              </ItemWrapper>
            );
          }}
        />
      </Box>
    );
  },
};
