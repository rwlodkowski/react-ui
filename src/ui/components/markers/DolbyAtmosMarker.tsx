import styled from "styled-components";
import Marker from "../common/Marker";
import { DolbyAtmosIcon } from "../common/icons";

const DolbyAtmosMarker = styled(Marker).attrs({ icon: DolbyAtmosIcon })`
  width: 79px;
  margin-left: 20px !important;
`;

export default DolbyAtmosMarker;
