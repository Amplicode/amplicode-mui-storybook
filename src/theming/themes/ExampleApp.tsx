import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { SidebarMenu } from "./SidebarMenu";
import { Content } from "./Content";

export const App = () => {
  const [open, setOpen] = useState<undefined | false | true>(true);

  const openedDrawerWidth = 240;
  const closedDrawerWidth = 64;

  const toggleOpenDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <AppBar
          position="fixed"
          sx={(theme) => ({
            width: open
              ? `calc(100% - ${openedDrawerWidth}px)`
              : `calc(100% - ${closedDrawerWidth}px)`,
            ml: open ? `${openedDrawerWidth}px` : `${closedDrawerWidth}px`,
            background: theme.palette.background.default,
            boxShadow: "none",
            border: "none",
            borderBottom: `1px solid ${theme.palette.divider}`,
            transition: "all 225ms",
          })}
        >
          <Toolbar>
            <img className="logo" src="brand-logo.svg" width={40} alt="" />
          </Toolbar>
        </AppBar>
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
              color="inherit"
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
          >
            <SidebarMenu />
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            width: open
              ? `calc(100% - ${openedDrawerWidth}px)`
              : `calc(100% - ${closedDrawerWidth}px)`,
            flexGrow: 1,
            bgcolor: "#fff",
            p: 2,
            boxSizing: "border-box",
            minHeight: "100vh",
          }}
        >
          <Toolbar />
          <Content />
        </Box>
      </Box>
    </>
  );
}
