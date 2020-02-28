import React from "react";
import { getGroupVisibility } from "../getGroupVisibility";

const mockLeftSlot = <div>Left</div>;
const mockCenterSlot = <div>Center</div>;
const mockRightSlot = <div>Right</div>;

const mockAllSlotsEmpty = {};

const mockAllSlotsFull = {
  left: mockLeftSlot,
  center: mockCenterSlot,
  right: mockRightSlot
};

const mockOnlyLeft = {
  left: mockLeftSlot
};

const mockOnlyCenter = {
  center: mockCenterSlot
};

const mockOnlyRight = {
  right: mockRightSlot
};

const mockLeftCenter = {
  left: mockLeftSlot,
  center: mockCenterSlot
};

const mockLeftRight = {
  left: mockLeftSlot,
  right: mockRightSlot
};

const mockCenterRight = {
  center: mockCenterSlot,
  right: mockRightSlot
};

describe("FlexRow group visibility", () => {
  it("should show none", () => {
    expect(getGroupVisibility(mockAllSlotsEmpty)).toStrictEqual({
      showLeft: false,
      showCenter: false,
      showRight: false
    });
  });
  it("should show all", () => {
    const allGroupsVisible = {
      showLeft: true,
      showCenter: true,
      showRight: true
    };
    expect(getGroupVisibility(mockAllSlotsFull)).toStrictEqual(
      allGroupsVisible
    );
    expect(getGroupVisibility(mockLeftCenter)).toStrictEqual(allGroupsVisible);
    expect(getGroupVisibility(mockCenterRight)).toStrictEqual(allGroupsVisible);
  });
  it("should show only left", () => {
    expect(getGroupVisibility(mockOnlyLeft)).toStrictEqual({
      showLeft: true,
      showCenter: false,
      showRight: false
    });
  });
  it("should show only center", () => {
    expect(getGroupVisibility(mockOnlyCenter)).toStrictEqual({
      showLeft: false,
      showCenter: true,
      showRight: false
    });
  });
  it("should show only right", () => {
    expect(getGroupVisibility(mockOnlyRight)).toStrictEqual({
      showLeft: false,
      showCenter: false,
      showRight: true
    });
  });
  it("should show left & right", () => {
    expect(getGroupVisibility(mockLeftRight)).toStrictEqual({
      showLeft: true,
      showCenter: false,
      showRight: true
    });
  });
});
