import BaseButton from "./BaseButton";
import { CloseIcon } from "../common/icons";
import styled from "styled-components";

const CloseButton = styled(BaseButton).attrs({ icon: CloseIcon })``;

export default CloseButton;
