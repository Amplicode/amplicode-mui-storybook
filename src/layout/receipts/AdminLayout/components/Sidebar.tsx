import { Menu } from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton, Toolbar } from "@mui/material";
import { SidebarProps } from "../model/types";

export function Sidebar({
  open,
  openedDrawerWidth,
  closedDrawerWidth,
  toggleOpenDrawer,
}: SidebarProps) {
  return (
    <Drawer
      sx={(theme) => ({
        width: open ? openedDrawerWidth : closedDrawerWidth,
        flexShrink: 0,
        transition: "all 225ms",
        overflowX: "hidden",
        "& .MuiDrawer-paper": {
          width: open ? openedDrawerWidth : closedDrawerWidth,
          boxSizing: "border-box",
          transition: "all 225ms",
          background: theme.palette.background.default,
        },
      })}
      variant={"permanent"}
      open={open}
      anchor="left"
    >
      <Toolbar>
        <IconButton
          color="primary"
          size="medium"
          onClick={toggleOpenDrawer}
          sx={(theme) => ({
            position: "absolute",
            left: theme.spacing(1.5),
          })}
        >
          <Menu />
        </IconButton>
      </Toolbar>
      <Divider />
      <Box
        sx={(theme) => ({ my: theme.spacing(2.5), overflowX: "hidden" })}
      ></Box>
    </Drawer>
  );
}