import BaseButton from "./BaseButton";
import { FullscreenExitIcon } from "../common/icons";
import styled from "styled-components";

const FullscreenExitButton = styled(BaseButton).attrs({
  icon: FullscreenExitIcon
})``;

export default FullscreenExitButton;
