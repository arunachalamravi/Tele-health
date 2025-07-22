export const AppBar_style = {
  navTitleSx: {
    fontSize: "15px",
    alignItems: "center",
    color: "common.white",
    padding: "4px",
    display: "flex",
  },
  navSx: {
    backgroundColor: "#ffffff",
    height: "54px",
    boxShadow: "0px 0px 8px #efefef",
    opacity: 1,
    // maxWidth: {
    //   // sm: 425,
    //   // md:1024,
    //   lg: 1024,
    //   xl: 1024,
    // },
    position: "fixed",
    pl: "280px",
    top: 0,
    right: 0,
    left: 0,
  },
  drawerLogoSx: {
    paddingLeft: "20px",
  },
  logoSx: {
    padding: "8px 15px",
    alignItems: "center",
    display: "flex",
  },
  loginSx: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarSx: {
    borderRadius: "19px",
    width: "32px",
    height: "32px",
    alignItems: "center",
    cursor: "pointer",
  },
  adminNameSx: {
    fontSize: "14px",
    color: "text.primary",
    fontWeight: 500,
    cursor: "pointer",
  },
  roleSx: {
    fontSize: "12px",
    color: "text.secondary",
    cursor: "pointer",
  },
  notificationSx: {
    "& .MuiBadge-badge": {
      width: "8px",
      height: "8px",
      borderRadius: "100%",
      minWidth: "auto",
      right: "28%",
      top: "16%",
      border: "1.5px solid",
      borderColor: "common.white",
    },
  },
  rootSx: {},

  rootSxx: {
    boxShadow: "0px 1px #dfe2e3",
    py: 2.1,
    px: 2.5,
  },
  iconBackgroundSx: {
    height: 32,
    width: 32,
    borderRadius: "50%",
    backgroundColor: "primaryTints.100",
  },
  buttonSx: {
    textTranform: "inherit",
  },
  organizationSx: { fontSize: "12px", fontWeight: 500 },

  menuSx: {
    "& .MuiPaper-root": {
      boxShadow: "0px 0px 4px 2px #E3E3E3",
      padding: "0px 5px",
    },
    mt: 3.8,
    cursor: "pointer",
    display: "block",
  },

  MenuItemSx: {
    fontSize: "12px",
    fontWeight: 500,
    py: 0.5,
    px: 1.5,
  },
};
