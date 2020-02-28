import React from "react";
import FlexColumn from "./common/FlexColumn/FlexColumn";
import FlexRow from "./common/FlexRow";
import HDMarker from "./markers/HDMarker";
import DolbyAtmosMarker from "./markers/DolbyAtmosMarker";
import CloseButton from "./buttons/CloseButton";
import PlayButton from "./buttons/PlayButton";
import Rewind10Button from "./buttons/Rewind10Button";
import Forward10Button from "./buttons/Forward10Button";
import Viewport from "./common/Viewport";
import VolumeButton from "./buttons/VolumeButton";
import FullscreenButton from "./buttons/FullscreenButton";
import NextButton from "./buttons/NextButton";
import ProgressBar from "./ProgressBar";
import AdLink from "./AdLink";
import TimeRemaining from "./TimeRemaining";
import AdCounter from "./AdCounter";
import Metadata from "./Metadata";
import LanguageButton from "./buttons/LanguageButton";
import styled from "styled-components";
import VolumeSlider from "./VolumeSlider";
import Popup, { PopupWrapper } from "./Popup";
import AudioSubtitleMenu from "./AudioSubtitleMenu";

interface Props {}

const mockData = {
  title: "Savage Builds",
  subtitle: "S1 E1 - Episode title lorem ipsum",
  logo: "/img/savage-artlogo-210x86.png"
};

const ControlBar = styled(FlexRow)`
  padding-top: 25px;
`;

const Controls: React.FC<Props> = ({ ...restProps }) => {
  return (
    <Viewport
      as={FlexColumn}
      flexJustifyContent="center"
      flexAlignItems="stretch"
      {...restProps}
      top={
        <FlexRow
          left={
            <>
              <HDMarker />
              <DolbyAtmosMarker />
            </>
          }
          center={
            <Metadata title={mockData.title} subtitle={mockData.subtitle} />
          }
          right={<CloseButton />}
        />
      }
      center={
        <FlexRow
          center={
            <>
              <Rewind10Button />
              <PlayButton />
              <Forward10Button />
            </>
          }
        />
      }
      bottom={
        <>
          <FlexRow
            center={
              <Metadata
                title={mockData.title}
                subtitle={mockData.subtitle}
                logoSrc={mockData.logo}
              />
            }
          />
          <FlexRow left={<AdCounter>Werbung 1 von 1</AdCounter>} />
          <FlexRow
            left={
              <>
                <AdLink>Zum Werbetreibenden</AdLink>
              </>
            }
            right={<TimeRemaining>00:33:42</TimeRemaining>}
          />
          <ProgressBar currentProgress={40} />
          <ControlBar
            left={<NextButton label="Nächste Folge" />}
            center={
              <>
                <Rewind10Button />
                <PlayButton />
                <Forward10Button />
              </>
            }
            right={
              <>
                <Popup>
                  <LanguageButton />
                  <AudioSubtitleMenu />
                </Popup>
                <Popup>
                  <VolumeButton />
                  <VolumeSlider volumeLevel={70} />
                </Popup>
                <FullscreenButton />
              </>
            }
          />
        </>
      }
    />
  );
};

export default styled(Controls)`
  padding: 30px 40px;
`;
