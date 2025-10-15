import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "p",
})(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: "inset 0 0 1px 0px #3170de",
  borderRadius: theme.shape.borderRadius,
  position: "relative",
}));
