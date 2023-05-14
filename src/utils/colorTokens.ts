import { darkTheme, lightTheme } from "./colors";

const colorTokens = (mode: string) => ({
  ...(mode === "dark" ? darkTheme : lightTheme),
});

export default colorTokens;
