import { Box, styled } from "@mui/material";

export const StyledContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "p",
})(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: "inset 0 0 1px 1px #3170de",
  // borderRadius: theme.shape.borderRadius,
  position: "relative",
}));
