import React from "react";
import styled from "styled-components";
import Text from "../Text";
import { StyledIconProps } from "../icons/StyledIcon";

export interface ButtonProps {
  disabled?: boolean;
  icon?: React.ComponentType<StyledIconProps>;
  label?: string;
  children?: never;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  label,
  children,
  ...restProps
}) => {
  return (
    <StyledButton {...restProps}>
      <StyledButtonContentWrapper>
        {Icon && <Icon />}
        {label && <StyledLabel>{label}</StyledLabel>}
      </StyledButtonContentWrapper>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  font: inherit;
  text-decoration: none;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  background: transparent;
  overflow: visible;
  text-transform: none;
  border: none;
  text-align: inherit;
  color: inherit;
  -webkit-appearance: button;
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`;

/* we need this wrapper because button elements are not able to correctly behave as flexbox containers */
const StyledButtonContentWrapper = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledLabel = styled(Text)`
  display: inline-block;
`;

export default Button;
