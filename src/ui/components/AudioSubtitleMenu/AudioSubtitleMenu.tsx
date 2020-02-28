import React from "react";
import styled, { css } from "styled-components";
import { PopupWrapper } from "../Popup";
import TrackList from "../TrackList";
import FlexRow from "../common/FlexRow";

interface AudioSubtitleMenuProps {}

const AudioSubtitleMenuPopup = styled(PopupWrapper)`
  right: calc(-50% - 7px);
  bottom: calc(100% + 10px);
`;

const AudioSubtitleMenuWrapper = styled(FlexRow)`
  width: 541px;
  height: 269px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
`;

const AudioSubtitleMenu: React.FC<AudioSubtitleMenuProps> = ({}) => {
  return (
    <AudioSubtitleMenuPopup>
      <AudioSubtitleMenuWrapper
        left={
          <TrackList
            header={"AUDIO"}
            tracks={[
              "Deutsch - Original",
              "Englisch",
              "Spanisch",
              "Französisch"
            ]}
          />
        }
        right={
          <TrackList
            header={"UNTERTITEL"}
            tracks={[
              "Aus",
              "Deutsch",
              "Deutsch - Audiodeskription",
              "Englisch"
            ]}
          />
        }
      />
    </AudioSubtitleMenuPopup>
  );
};

export default AudioSubtitleMenu;
