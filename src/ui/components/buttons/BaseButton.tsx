import styled from "styled-components";
import Button from "../common/Button";
import StyledIcon from "../common/icons/StyledIcon";

const BaseButton = styled(Button)`
  min-width: 28px;
  height: 28px;

  & ${StyledIcon} {
    transition: transform 100ms ease-in-out;
  }
  &:hover ${StyledIcon} {
    transform: scale(1.2);
  }
`;

export default BaseButton;
