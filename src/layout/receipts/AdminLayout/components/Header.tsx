import { AppBar, Toolbar } from "@mui/material";
import { CommonProps } from "../model/types";

export function Header({
  open,
  openedDrawerWidth,
  closedDrawerWidth,
}: CommonProps) {
  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        width: open
          ? `calc(100% - ${openedDrawerWidth}px)`
          : `calc(100% - ${closedDrawerWidth}px)`,
        marginLeft: open ? `${openedDrawerWidth}px` : `${closedDrawerWidth}px`,
        background: theme.palette.background.default,
        boxShadow: "none",
        border: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: "all 225ms",
      })}
    >
      <Toolbar>
        <img src="vite.svg" alt="" />
      </Toolbar>
    </AppBar>
  );
}