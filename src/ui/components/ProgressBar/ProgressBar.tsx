import React from "react";
import styled, { css } from "styled-components";

export interface ProgressBarProps {
  currentProgress: number;
}

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  touch-action: none;
`;

const Scrubber = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: auto;
  position: relative;
`;

const ScrubberTrack = styled.div`
  height: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
`;

const CurrentProgressTrack = styled.div.attrs<ProgressBarProps>(
  ({ currentProgress }) => {
    return { style: { width: `${currentProgress}%` } };
  }
)<ProgressBarProps>(
  () => css`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #587591;
  `
);

const ScrubberKnob = styled.div.attrs<ProgressBarProps>(
  ({ currentProgress }) => {
    return { style: { left: `${currentProgress}%` } };
  }
)<ProgressBarProps>(
  () => css`
    position: absolute;
    top: 50%;
    height: 15px;
    width: 15px;
    margin: calc(-15px / 2);
    background: white;
    border-radius: 50%;
    cursor: pointer;
  `
);

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentProgress,
  ...restProps
}) => {
  return (
    <ProgressBarWrapper {...restProps}>
      <Scrubber>
        <ScrubberTrack>
          <CurrentProgressTrack currentProgress={currentProgress} />
        </ScrubberTrack>
        <ScrubberKnob currentProgress={currentProgress} />
      </Scrubber>
    </ProgressBarWrapper>
  );
};

export default styled(ProgressBar)``;
