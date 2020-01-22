import React from "react";
import Flexbox from "../Flexbox/Flexbox";

export interface FlexColumnProps {
  top?: React.ComponentType;
  center?: React.ComponentType;
  bottom?: React.ComponentType;
  children: never;
}

const FlexColumn: React.FC<FlexColumnProps> = () => {
  return <Flexbox></Flexbox>;
};

export default FlexColumn;
