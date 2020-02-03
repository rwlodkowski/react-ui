import React from "react";
import { StyledIconProps } from "../icons/StyledIcon";

export interface MarkerProps {
  icon: React.ComponentType<StyledIconProps>;
  children?: never;
}

const Marker: React.FC<MarkerProps> = ({
  icon: Icon,
  children,
  ...restProps
}) => {
  return <Icon {...restProps} />;
};

export default Marker;
