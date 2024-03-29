import React from "react";
import styled, { css } from "styled-components";
import { StyledIconProps } from "../icons/StyledIcon";

export interface MarkerProps {
  icon: React.ComponentType<StyledIconProps>;
  opacity?: number;
  children?: never;
}

const Marker: React.FC<MarkerProps> = ({
  icon: Icon,
  opacity,
  children,
  ...restProps
}) => {
  return <Icon {...restProps} />;
};

export default styled(Marker)<MarkerProps>(
  ({ opacity = 0.5 }) => css`
    display: inline-block;
    opacity: ${opacity};
    user-select: none;
    pointer-events: none;
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
  `
);
