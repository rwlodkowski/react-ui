import React from "react";
import styled from "styled-components";
import Flexbox from "../Flexbox";
import { ListItem } from ".";

export interface ListProps {
  items: string[];
  children?: never;
}

const List: React.FC<ListProps> = ({ items, ...restProps }) => {
  return (
    <Flexbox as="ul" flexDirection="column" {...restProps}>
      {items.map(item => (
        <ListItem>{item}</ListItem>
      ))}
    </Flexbox>
  );
};

export default styled(List)``;
