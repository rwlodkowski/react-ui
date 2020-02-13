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

interface FlexboxProps {
  flexDirection?: FlexDirectionType;
  flexWrap?: FlexWrapType;
  flexJustifyContent?: FlexJustifyContentType;
  flexAlignItems?: FlexAlignItemsType;
}

const Flexbox = styled.div<FlexboxProps>(
  ({ flexDirection, flexWrap, flexJustifyContent, flexAlignItems }) => css`
    display: flexbox;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${flexJustifyContent};
    align-items: ${flexAlignItems};
  `
);

export default Flexbox;
