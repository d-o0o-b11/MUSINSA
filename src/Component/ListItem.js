import React from "react";
import styled from "styled-components";

const ListItem = ({ width, height, children }) => {
  return (
    <StyledListItem width={width} height={height}>
      {children}
    </StyledListItem>
  );
};

const StyledListItem = styled.div`
  width: ${(props) => props.width || "300px"};
  heigth: ${(props) => props.height || "460px"};
  min-height: ${(props) => props.height || "400px"};
  margin: 0 auto;
  border-radius: 20px;
  border: none;
  display: block;
  margin-top: 30px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(232, 220, 202);
  position: relative;
  img {
    place-items: center;
    display: grid;
  }
  &:hover {
    background-color: rgb(227, 195, 158);
    cursor: pointer;
  }
  @media screen and (max-width: 840px) {
    width: ${(props) => props.width || "320px"};
    heigth: ${(props) => props.height || "160px"};
    min-height: ${(props) => props.height || "160px"};
  }
`;

export default ListItem;
