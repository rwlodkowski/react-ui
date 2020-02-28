import React from "react";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import baseTheme from "./ui/themes/baseTheme";
import Viewport from "./ui/components/common/Viewport";
import Controls from "./ui/components/Controls";

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    :root {
      --iconSize: 28px;
    }
    html {
      color: white;
      font-family: ${theme.defaults.fontFamily};
      background-color: black;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
  `
);

const onClickHandler = () => {
  alert("clicked");
};

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <Viewport>
          <Controls />
        </Viewport>
      </ThemeProvider>
    </div>
  );
};

export default App;
