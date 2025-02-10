import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  styled,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Grid,
  Paper,
  ListItemButton,
} from "@mui/material";

const CenterStory = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
});

function not(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function TransferListComponent() {
  const [checked, setChecked] = useState<string[]>([]);
  const [left, setLeft] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);
  const [right, setRight] = useState<string[]>(["Item 5", "Item 6"]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleTransfer = (
    source: string[],
    destination: string[],
    setSource: Function,
    setDestination: Function
  ) => {
    const itemsToMove = checked.filter((item) => source.includes(item));
    setSource(not(source, itemsToMove));
    setDestination([...destination, ...itemsToMove]);
    setChecked(not(checked, itemsToMove));
  };

  const customList = (items: readonly string[]) => (
    <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <Checkbox
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            onClick={() => handleTransfer(left, right, setLeft, setRight)}
          >
            ▶
          </Button>
          <Button
            onClick={() => handleTransfer(right, left, setRight, setLeft)}
          >
            ◀
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}

const meta = {
  title: "Inputs/TransferList",
  component: TransferListComponent,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Typography variant="subtitle2">
          Transfer List component using MUI components like List, Paper, and
          Buttons.
        </Typography>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TransferListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <CenterStory>
        <TransferListComponent />
      </CenterStory>
    );
  },
  decorators: [
    (Story) => (
      <>
        <Typography variant="subtitle2">
          Default Transfer List implementation using MUI components.
        </Typography>
        <CenterStory>
          <Story />
        </CenterStory>
      </>
    ),
  ],
};
