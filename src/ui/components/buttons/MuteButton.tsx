import BaseButton from "./BaseButton";
import { MuteIcon } from "../common/icons";
import styled from "styled-components";

const MuteButton = styled(BaseButton).attrs({
  icon: MuteIcon
})``;

export default MuteButton;
