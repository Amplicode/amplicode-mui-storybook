import { Person, DocumentScannerOutlined, GraphicEqOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { MenuItem } from "./MenuItem";

const menuItems = [
  {
    label: "Users",
    Icon: Person,
    href: "",
  },
  {
    label: "Surveys",
    Icon: GraphicEqOutlined,
    href: "",
  },
  {
    label: "Documents",
    Icon: DocumentScannerOutlined,
    href: "",
  },
];

export const SidebarMenu = () => {
  return (
    <Box>
      {menuItems.map((menuItem) => {
        return <MenuItem {...menuItem} />;
      })}
    </Box>
  );
};
