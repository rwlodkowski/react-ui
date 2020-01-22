import styled from "styled-components";

import React, { ReactElement } from "react";
import Button from "./common/Button/Button";
import { PlayIcon } from "./common/icons";

interface ControlsProps {}

export function Controls<ControlsProps>(): ReactElement {
  return (
    <ControlsWrapper>
      <ControlsGroup>
        <Button icon={PlayIcon}>Play</Button>
      </ControlsGroup>
    </ControlsWrapper>
  );
}

const ControlsWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #aaa;
`;

const ControlsGroup = styled.div`
  display: flex;
  background-color: lightblue;
`;

export default styled(Controls)``;
