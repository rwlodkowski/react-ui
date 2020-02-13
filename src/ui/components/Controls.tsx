import React from "react";
import FlexColumn from "./common/FlexColumn";
import FlexRow from "./common/FlexRow";
import HDMarker from "./markers/HDMarker";
import DolbyAtmosMarker from "./markers/DolbyAtmosMarker";
import CloseButton from "./buttons/CloseButton";
import PlayButton from "./buttons/PlayButton";
import Rewind10Button from "./buttons/Rewind10Button";
import Forward10Button from "./buttons/Forward10Button";
import ChannelsListButton from "./buttons/ChannelsListButton";

interface Props {}

const Controls: React.FC<Props> = () => {
  return (
    <FlexColumn
      top={
        <FlexRow
          left={
            <>
              <DolbyAtmosMarker />
              <HDMarker />
            </>
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
          <FlexRow center={<div>METADATA</div>} />
          <FlexRow
            left={<ChannelsListButton />}
            center={
              <>
                <Rewind10Button />
                <PlayButton />
                <Forward10Button />
              </>
            }
          />
        </>
      }
    />
  );
};

export default Controls;
