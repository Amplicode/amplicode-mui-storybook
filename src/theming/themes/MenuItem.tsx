import { SvgIcon, Button } from "@mui/material";
import React, { useCallback } from "react";

type MenuItemProps = {
  label: string;
  Icon: typeof SvgIcon;
  href: string;
};

export const MenuItem = ({ label, Icon, href }: MenuItemProps) => {
  const onButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // goto href
    },
    [],
  );

  return (
    <Button
      startIcon={<Icon sx={(theme) => ({ mr: 2 })} />}
      size="small"
      variant="text"
      sx={(theme) => ({
        color: theme.palette.text.primary,
        justifyContent: "flex-start",
        px: theme.spacing(3),
        py: theme.spacing(1),
      })}
      fullWidth={true}
      onClick={onButtonClick}
    >
      {label}
    </Button>
  );
};