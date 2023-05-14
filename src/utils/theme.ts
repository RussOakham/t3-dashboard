import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { darkTheme, lightTheme } from "./colors";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
  cssVarPrefix: "chakra",
};

const theme = extendTheme({
  colors: {
    modes: {
      dark: {
        ...darkTheme,
      },
      light: {
        ...lightTheme,
      },
    },
  },
  config,
  typography: {
    fonts: {
      heading: "var(--font-roboto)",
      body: "var(--font-poppins)",
    },
    fontSize: ["0.75rem", "1rem", "1.25rem", "1.5rem"],
    h1: {
      fontSize: ["2rem", "2.5rem", "3rem", "3.5rem"],
    },
    h2: {
      fontSize: ["1.5rem", "1.75rem", "2rem", "2.25rem"],
    },
    h3: {
      fontSize: ["1.25rem", "1.5rem", "1.75rem", "2rem"],
    },
    h4: {
      fontSize: ["1rem", "1.25rem", "1.5rem", "1.75rem"],
    },
    h5: {
      fontSize: ["0.75rem", "1rem", "1.25rem", "1.5rem"],
    },
    h6: {
      fontSize: ["0.5rem", "0.75rem", "1rem", "1.25rem"],
    },
  },
});

export default theme;
