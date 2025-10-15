import { ArrowBack, Info, InfoOutlineRounded } from "@mui/icons-material";
import {
  Box,
  Toolbar,
  Typography,
  Container,
  Stack,
  Button,
  ButtonProps,
  Avatar,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  CardContent,
  Card,
  CardActions,
  CardMedia,
  Grid,
  CardActionArea,
} from "@mui/material";
import React, { ReactNode, useCallback, useState } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";

type RouterData = {
  routerType?: "browser" | "hash" | "memory";
};

export const Layout = ({ routerType }: RouterData) => {
  const location = useLocation();
  let path = "https://localhost";

  switch (routerType) {
    case "browser":
      path += location.pathname;
      break;
    case "hash":
      path += `/#${location.pathname}`;
      break;
    case "memory":
      path = `Routing is performed in memory. URL management via the browser is not used.`;
      break;
  }
  return (
    <>
      <TextField
        value={path}
        size="small"
        sx={(theme) => ({
          width: "100%",
          m: 1,

          [`& .MuiInputBase-root`]: {
            background: theme.alpha(theme.palette.primary.main, 0.1),
            borderRadius: 12,
          },
        })}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <InfoOutlineRounded />
              </InputAdornment>
            ),
          },
        }}
      />
      <Stack
        direction="column"
        sx={(theme) => ({
          width: "100%",
          height: "calc(100vh - 56px)",
        })}
      >
        <Header />
        <Content routerType={routerType}>
          <Outlet />
        </Content>
        <Footer />
      </Stack>
    </>
  );
};

function Header() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        minHeight: theme.spacing(10),
        background: "#fff",
        boxShadow: "inset 0 0 1px 0px #3170de",
        position: "sticky",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 9,
      })}
    >
      <Toolbar sx={{ width: "100%", height: "100%" }}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{ width: "100%", height: "100%" }}
          alignItems={"center"}
        >
          <Typography variant="h6" noWrap component="div" color={"#3170de"}>
            Header
          </Typography>
          <HeaderMenu />
          <Avatar sx={{ width: 40, height: 40 }}></Avatar>
        </Stack>
      </Toolbar>
    </Box>
  );
}

const HeaderLink = ({
  children,
  to,
  ...props
}: ButtonProps & { to: string }) => {
  const navigate = useNavigate();
  const match = useMatch(`${to}/*`);

  const onButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      navigate(`${to}`);
    },
    []
  );

  return (
    <Button
      sx={(theme) => ({
        height: "100%",
        px: 2,
        ...(match?.pathname && {
          backgroundColor: theme.alpha(theme.palette.primary.light, 0.1),
        }),
      })}
      variant="text"
      size="medium"
      onClick={onButtonClick}
      {...props}
    >
      {children} {}
    </Button>
  );
};

const HeaderMenu = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <HeaderLink to={"/"}>Home</HeaderLink>
      <HeaderLink to={"/tours"}>Tours</HeaderLink>
      <HeaderLink to={"/contacts"}>Contacts</HeaderLink>
    </Box>
  );
};

function Content({
  children,
  routerType,
}: { children: ReactNode } & RouterData) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={(theme) => ({
        flex: 1,
        borderLeft: `1px solid ${theme.palette.grey[100]}`,
        borderRight: `1px solid ${theme.palette.grey[100]}`,
      })}
    >
      <Container fixed sx={(theme) => ({ height: "100%" })}>
        {children}
        {location.pathname === "/tours" ? (
          <Grid container spacing={2} mt={2}>
            <Grid size={{ xs: 12, lg: 3 }}>
              <Card>
                <CardActionArea onClick={() => navigate(`/tours/1`)}>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?q=80&w=400&auto=format&fit=crop"
                    alt="Mountains"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      Autumn trip
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, lg: 3 }}>
              <Card>
                <CardActionArea onClick={() => navigate(`/tours/2`)}>
                  <CardMedia
                    component="img"
                    height="180"
                    image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                    alt="Mountains"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      Mountain escape
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ) : null}
      </Container>
    </Box>
  );
}

export function TourInfo() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <Stack direction={"column-reverse"} alignItems={"flex-start"}>
      <Typography variant="h4" mt={2}>
        Tour with id {params.id}
      </Typography>
      <Button
        startIcon={<ArrowBack />}
        variant="outlined"
        color="primary"
        size="small"
        sx={{height: 40, mt: 2}}
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
    </Stack>
  );
}

function Footer() {
  return (
    <Box
      sx={(theme) => ({
        boxShadow: "inset 0 0 1px 0px #3170de",
        py: 2,
        background: "#fff",
      })}
    >
      <Typography variant={"subtitle2"} textAlign={"center"}>
        Footer ©
      </Typography>
    </Box>
  );
}
