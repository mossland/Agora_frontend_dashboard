import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18181B",
      light: "#717179",
      dark: "#000000",
      //   contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
    },

    custom: {
      hover: "#F4F4F5",
      border: "#E4E4E7",
      tableText: "#61616E",
      tableBackground: "#E8E8E8",
      status: {
        approved: "#658BF7",
        ongoing: "#55B952",
        reviewing: "#9163F6",
        ready: "#DFB63F",
        rejected: "#EC605A",
        ended: "#929292",
      },
    },
  },
});

export default theme;
