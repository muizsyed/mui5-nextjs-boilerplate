import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, grey, amber, indigo, pink } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
    palette: {
        background: {
            default: '#FAFAFA'
        },
        primary: {
            main: '#2E0076'
        },
        secondary: pink,
    },
});

theme = responsiveFontSizes(theme);

export default theme;