import React from "react";
import Viewport from "../components/common/Viewport/Viewport";
import FlexColumn from "../components/common/FlexColumn/FlexColumn";
import FlexRow from "../components/common/FlexRow";

interface Props {}

const WebPlayerUI: React.FC<Props> = () => {
  return (
    <Viewport>
      <FlexColumn top={<FlexRow />} />
    </Viewport>
  );
};

export default WebPlayerUI;
