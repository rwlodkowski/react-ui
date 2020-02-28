import React from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { FlexboxProps } from "../Flexbox/Flexbox";

export interface FlexColumnProps {
  top?: React.ReactNode;
  center?: React.ReactNode;
  bottom?: React.ReactNode;
  gap?: string | number;
  children?: never;
}

const FlexColumnFieldTop = styled(Flexbox)`
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: flex-start;
  align-items: stretch;
`;

const FlexColumnFieldCenter = styled(Flexbox)`
  flex-direction: column;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
`;

const FlexColumnFieldBottom = styled(Flexbox)`
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: flex-end;
  align-items: stretch;
`;

const FlexColumn: React.FC<FlexColumnProps & FlexboxProps> = ({
  top,
  center,
  bottom,
  ...restProps
}) => {
  return (
    <Flexbox flexDirection="column" {...restProps}>
      {top && <FlexColumnFieldTop>{top}</FlexColumnFieldTop>}
      {center && <FlexColumnFieldCenter>{center}</FlexColumnFieldCenter>}
      {bottom && <FlexColumnFieldBottom>{bottom}</FlexColumnFieldBottom>}
    </Flexbox>
  );
};

export default styled(FlexColumn)``;
