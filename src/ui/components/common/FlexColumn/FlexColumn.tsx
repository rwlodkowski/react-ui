import React from "react";
import Flexbox from "../Flexbox/Flexbox";

export interface FlexColumnProps {
  top?: React.ReactNode;
  center?: React.ReactNode;
  bottom?: React.ReactNode;
  children?: never;
}

const FlexColumn: React.FC<FlexColumnProps> = ({ top, center, bottom }) => {
  return (
    <Flexbox flexDirection="column">
      {top && <Flexbox>{top}</Flexbox>}
      {center && <Flexbox>{center}</Flexbox>}
      {bottom && <Flexbox>{bottom}</Flexbox>}
    </Flexbox>
  );
};

export default FlexColumn;
