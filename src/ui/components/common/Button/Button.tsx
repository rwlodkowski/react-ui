import React from "react";
import styled from "styled-components";
import { StyledIconProps } from "../icons/StyledIcon";

export interface ButtonProps {
  disabled?: boolean;
  icon?: React.ComponentType<StyledIconProps>;
  label?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  label,
  children,
  ...restProps
}) => {
  return (
    <StyledButton {...restProps}>
      {Icon && <Icon />}
      {label && <StyledLabel>{label}</StyledLabel>}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: stretch;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: inherit;
  cursor: pointer;
`;

const StyledLabel = styled.span`
  display: inline-flex;
  align-items: center;
`;

export default Button;
