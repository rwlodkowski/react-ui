import { ReactNode } from "react";

export const getGroupVisibility = (slots: {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}) => {
  let { left, center, right } = slots;
  let result = {
    showLeft: !!left,
    showCenter: !!center,
    showRight: !!right
  };
  if (result.showCenter && !result.showLeft && !result.showRight) {
    result.showLeft = false;
    result.showRight = false;
  } else if (result.showCenter && (result.showLeft || result.showRight)) {
    result.showLeft = true;
    result.showRight = true;
  }
  return result;
};
