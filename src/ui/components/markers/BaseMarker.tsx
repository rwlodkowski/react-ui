import styled from "styled-components";
import { StyledIconProps } from "../common/icons/StyledIcon";
import Marker from "../common/Marker/Marker";

export interface MarkerProps {
  icon: React.ComponentType<StyledIconProps>;
  opacity?: number;
  children?: never;
}

const BaseMarker = styled(Marker)`
  display: inline-block;
  opacity: 0.5;
  user-select: none;
  pointer-events: none;
`;

export default BaseMarker;
