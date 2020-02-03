import styled from "styled-components";

export interface StyledIconProps {
  size?: number | string;
}

const StyledIcon = styled.span<StyledIconProps>`
  width: ${({ size, theme }) => size ?? `var(--iconSize, ${theme.icon?.size})`};
  height: ${({ size, theme }) =>
    size ?? `var(--iconSize, ${theme.icon?.size})`};
  display: inline-block;
  flex: 0 0 auto;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default StyledIcon;
