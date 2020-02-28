import React from "react";
import styled, { css } from "styled-components";
import { Heading3 } from "../common/Heading";
import List from "../common/List";

interface TrackListProps {
  header: string;
  tracks: string[];
}

const TrackListWrapper = styled.div`
  ${Heading3} {
    opacity: 0.5;
    font-family: Campton-Book;
    font-size: 13px;
    padding: 0 15px;
    margin: 0 0 20px 0;
  }
  ${List} {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    max-height: 70vh;
    position: relative;
    min-width: 100px;
  }
  ${List} > li {
    font-size: 16px;
    height: 36px;
    width: 100%;
    padding: 9px 15px 8px 15px;
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    color: white;
    outline: none;
  }
`;

const TrackList: React.FC<TrackListProps> = ({
  header,
  tracks,
  ...restProps
}) => {
  return (
    <TrackListWrapper {...restProps}>
      <Heading3>{header}</Heading3>
      <List items={tracks} />
    </TrackListWrapper>
  );
};

export default styled(TrackList)``;
