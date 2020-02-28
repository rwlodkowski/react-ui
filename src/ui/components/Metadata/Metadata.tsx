import React from "react";
import styled from "styled-components";
import Image from "../common/Image";
import { Heading1, Heading2 } from "../common/Heading";
import Flexbox from "../common/Flexbox";

interface MetadataProps {
  title: string;
  subtitle?: string;
  logoSrc?: string;
}

const StyledLogo = styled(Image)`
  display: block;
  width: auto;
  max-width: 140px;
  max-height: 57px;
`;
const StyledTitle = styled(Heading1)`
  height: 27px;
  font-family: Campton-Book;
  font-size: 22px;
  font-weight: normal;
  text-align: center;
`;
const StyledSubtitle = styled(Heading2)`
  height: 27px;
  font-family: Campton-Bold;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

const Metadata: React.FC<MetadataProps> = ({ title, subtitle, logoSrc }) => {
  return (
    <Flexbox flexDirection="column" flexAlignItems="center">
      {logoSrc ? (
        <StyledLogo src={logoSrc} alt={title} />
      ) : (
        <StyledTitle>{title}</StyledTitle>
      )}
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </Flexbox>
  );
};

export default styled(Metadata)`
  user-select: none;
  pointer-events: none;
`;
