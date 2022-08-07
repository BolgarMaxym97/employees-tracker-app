import React from "react";
import {createTheme, ThemeProvider, useThemeMode} from "@rneui/themed";
import MainScreen from "./screen/main";
import HeaderComponent from "./layout/header";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

export default function App() {
    const {setMode, mode} = useThemeMode();

    return (
    <ThemeProvider theme={theme}>
      <HeaderComponent/>
      <MainScreen/>
    </ThemeProvider>
  );
}
