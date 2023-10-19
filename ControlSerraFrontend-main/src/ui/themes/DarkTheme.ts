import { createTheme } from "@mui/material";
import { cyan, yellow,grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey['A100'],
      dark: grey['A100'],
      light: grey['A100'],
      contrastText: "#fff",
    },
    secondary: {
      main: cyan[50],
      dark: cyan[50],
      light: cyan[50],
      contrastText: "#fff",
    },
    background: {
      default: "#202124",
      paper: "#303134",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});
