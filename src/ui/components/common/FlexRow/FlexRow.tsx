import React from "react";
import Flexbox from "../Flexbox/Flexbox";

export interface FlexRowProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  children?: never;
}

const FlexRow: React.FC<FlexRowProps> = ({ left, center, right }) => {
  return (
    <Flexbox flexDirection="row">
      {left && <Flexbox>{left}</Flexbox>}
      {center && <Flexbox>{center}</Flexbox>}
      {right && <Flexbox>{right}</Flexbox>}
    </Flexbox>
  );
};

export default FlexRow;
