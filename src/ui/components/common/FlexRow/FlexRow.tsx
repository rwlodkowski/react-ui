import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import Flexbox from "../Flexbox";
import { FlexboxProps } from "../Flexbox/Flexbox";
import { getGroupVisibility } from "./getGroupVisibility";

export interface FlexRowProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  gap?: string | number;
  children?: never;
}

const FlexRowGroup = styled(Flexbox)(
  ({ theme }) => css`
    && > *:not(:first-child) {
      margin-left: 40px;
    }
  `
);

const FlexRowGroupLeft = styled(FlexRowGroup)`
  flex: 1 1 0%;
  justify-content: flex-start;
`;

const FlexRowGroupCenter = styled(FlexRowGroup)`
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;

  &:first-child:only-child {
    flex: 1 1 100%;
  }
`;

const FlexRowGroupRight = styled(FlexRowGroup)`
  flex: 1 1 0%;
  justify-content: flex-end;
`;

const FlexRow: React.FC<FlexboxProps & FlexRowProps> = ({
  left,
  center,
  right,
  gap = "40px",
  ...restProps
}) => {
  const { showLeft, showCenter, showRight } = getGroupVisibility({
    left,
    center,
    right
  });
  return (
    <Flexbox flexDirection="row" {...restProps}>
      {showLeft && <FlexRowGroupLeft {...gap}>{left}</FlexRowGroupLeft>}
      {showCenter && <FlexRowGroupCenter {...gap}>{center}</FlexRowGroupCenter>}
      {showRight && <FlexRowGroupRight {...gap}>{right}</FlexRowGroupRight>}
    </Flexbox>
  );
};

export default styled(FlexRow)``;
