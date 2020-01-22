import Button from "../common/Button";
import styled from "styled-components";

const BaseButton = styled(Button)`
  width: 28px;
  height: 28px;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export default BaseButton;
