import React from "react";
import styled from "styled-components";
import device from "../../utils/device";
import { NavLink } from "react-router-dom";

const Link = (): JSX.Element => {
  return (
    <LinkWrapper>
      <LinkS>
        <NavLink to="/zapisane">Zapisane</NavLink>
      </LinkS>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  margin-top: 10px;
`;

const LinkS = styled.div`
  color: rgb(0, 149, 255);
  cursor: pointer;
  width: 120px;
  text-align: center;
  border-bottom: 1px solid rgb(0, 149, 255);
  padding-bottom: 2px;
  transition: all 100ms linear;

  @media ${device.laptop} {
  }

  &:hover {
    color: #111;
    border-color: #111;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Link;
