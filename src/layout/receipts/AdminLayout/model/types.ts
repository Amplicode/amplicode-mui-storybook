export type CommonProps = {
  open: boolean;
  openedDrawerWidth: number;
  closedDrawerWidth: number;
};

export type SidebarProps = CommonProps & {
  toggleOpenDrawer: () => void;
};