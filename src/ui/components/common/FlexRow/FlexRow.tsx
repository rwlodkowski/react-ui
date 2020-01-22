import React from "react";

export interface FlexRowProps {
  left: React.ComponentType;
  center: React.ComponentType;
  right: React.ComponentType;
  children: never;
}

const FlexRow: React.FC<FlexRowProps> = () => {
  return <div></div>;
};

export default FlexRow;
