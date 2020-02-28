import React from "react";
import styled, { css } from "styled-components";
import { PopupWrapper } from "../Popup";

interface VolumeSliderProps {
  volumeLevel: number;
}

const VolumeSliderPopup = styled(PopupWrapper)`
  left: calc(-50% - 7px);
  bottom: calc(100% + 10px);
`;

const VolumeSliderWrapper = styled.div`
  width: 68px;
  height: 190px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
`;

interface SliderProps {
  value: number;
}

const Slider = styled.div`
  position: relative;
  width: 5px;
  height: 100%;
  background: #5b5b5b;
  box-sizing: border-box;
`;

const SliderLevel = styled.div.attrs<SliderProps>(({ value }) => {
  return { style: { height: `${value}%` } };
})<SliderProps>(
  () => css`
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    background: white;
  `
);

const SliderKnobTarget = styled.div.attrs<SliderProps>(({ value }) => {
  return { style: { bottom: `${value}%` } };
})<SliderProps>(
  () => css`
    position: absolute;
    width: 15px;
    height: 15px;
    left: 50%;
    margin: calc(-15px / 2);
  `
);
const SliderKnob = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  background: white;
`;

const VolumeSlider: React.FC<VolumeSliderProps> = ({ volumeLevel }) => {
  return (
    <VolumeSliderPopup>
      <VolumeSliderWrapper>
        <Slider>
          <SliderLevel value={volumeLevel} />
          <SliderKnobTarget value={volumeLevel}>
            <SliderKnob />>
          </SliderKnobTarget>
        </Slider>
      </VolumeSliderWrapper>
    </VolumeSliderPopup>
  );
};

export default VolumeSlider;
