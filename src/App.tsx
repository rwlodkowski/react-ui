import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import baseTheme from "./ui/themes/baseTheme";
import Viewport from "./ui/components/common/Viewport";
import Controls from "./ui/components/Controls";

const GlobalStyle = createGlobalStyle`
:root {
  --iconSize: 28px;
}
html {
  color: white;
  background-color: black;
}
*, *:before, *:after {
  box-sizing: border-box;
}
`;

const onClickHandler = () => {
  alert("clicked");
};

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Viewport>
        <Controls />
      </Viewport>
      {/*<HDMarker />
      <DolbyAtmosMarker />
       <PauseButton />
      <PlayButton />
      <ChannelsListButton label="Channels" />
      <CloseButton />
      <Forward10Button />
      <Forward30Button />
      <FullscreenExitButton />
      <FullscreenButton />
      <LanguageButton />
      <MuteButton />
      <PauseButton />
      <PlayButton />
      <RestartButton />
      <Rewind10Button />
      <Rewind30Button />
      <VolumeButton />  */}
      {/* <ThemeProvider theme={baseTheme}>
        <WebPlayerUI />
      </ThemeProvider> */}
      {/* <GlobalStyle />
      <ChannelsListIcon />
      <ChromecastIcon />
      <CloseIcon />
      <DolbyAtmosIcon />
      <ErrorIcon />
      <Forward10Icon />
      <Forward30Icon />
      <FullscreenExitIcon />
      <FullscreenIcon />
      <JoynLogoIcon />
      <MuteIcon />
      <PauseIcon />
      <PlayIcon />
      <RestartIcon />
      <Rewind10Icon />
      <Rewind30Icon />
      <VolumeIcon /> */}
    </div>
  );
};

export default App;
