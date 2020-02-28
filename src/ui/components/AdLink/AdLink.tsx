import styled from "styled-components";
import Text from "../common/Text";

interface Props {}

const AdLink = styled(Text)`
  display: inline-block;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export default AdLink;
