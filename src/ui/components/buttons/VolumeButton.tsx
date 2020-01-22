import BaseButton from "./BaseButton";
import { VolumeIcon } from "../common/icons";
import styled from "styled-components";

const VolumeButton = styled(BaseButton).attrs({ icon: VolumeIcon })``;

export default VolumeButton;
