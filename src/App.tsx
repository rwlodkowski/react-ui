import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import PlayButton from "./ui/components/buttons/PlayButton";
import PauseButton from "./ui/components/buttons/PauseButton";
import ChannelsListButton from "./ui/components/buttons/ChannelsListButton";
import CloseButton from "./ui/components/buttons/CloseButton";
import Forward10Button from "./ui/components/buttons/Forward10Button";
import Forward30Button from "./ui/components/buttons/Forward30Button";
import FullscreenExitButton from "./ui/components/buttons/FullscreenExitButton";
import FullscreenButton from "./ui/components/buttons/FullscreenButton";
import MuteButton from "./ui/components/buttons/MuteButton";
import RestartButton from "./ui/components/buttons/RestartButton";
import Rewind10Button from "./ui/components/buttons/Rewind10Button";
import Rewind30Button from "./ui/components/buttons/Rewind30Button";
import VolumeButton from "./ui/components/buttons/VolumeButton";

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
      <PauseButton />
      <PlayButton />
      <ChannelsListButton label="" />
      <CloseButton />
      <Forward10Button />
      <Forward30Button />
      <FullscreenExitButton />
      <FullscreenButton />
      <MuteButton />
      <PauseButton />
      <PlayButton />
      <RestartButton />
      <Rewind10Button />
      <Rewind30Button />
      <VolumeButton />
      {/*<ThemeProvider theme={theme}>
        <WebPlayerUI />
      </ThemeProvider>
       <GlobalStyle />
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
