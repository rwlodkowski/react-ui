import styled, { css } from "styled-components";

type FlexDirectionType = "row" | "column" | "row-reverse" | "column-reverse";
type FlexWrapType = "nowrap" | "wrap" | "wrap-reverse";
type FlexJustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type FlexAlignItemsType =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";

type FlexAlignSelfType =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

export interface FlexboxProps {
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  flexJustifyContent?: FlexJustifyContentType;
  flexAlignItems?: FlexAlignItemsType;
  flexBasis?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexAlignSelf?: FlexAlignSelfType;
  flexOrder?: number;
}

const Flexbox = styled.div<FlexboxProps>(
  ({
    flexDirection,
    flexWrap,
    flexJustifyContent,
    flexAlignItems,
    flexBasis = "auto",
    flexGrow = 0,
    flexShrink = 1,
    flexAlignSelf,
    flexOrder
  }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${flexJustifyContent};
    align-items: ${flexAlignItems};
    /* IE11: flex shorthand declarations with unitless flex-basis values are ignored */
    flex: ${flexGrow} ${flexShrink} ${flexBasis === 0 ? "0%" : flexBasis};
    align-self: ${flexAlignSelf};
    order: ${flexOrder};
  `
);

export default Flexbox;
