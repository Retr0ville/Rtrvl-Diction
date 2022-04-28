/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { FcSearch } from 'react-icons/fc';
import styled from 'styled-components';

const HeaderWrapper = styled.h1`
  border: 1px solid red;
  text-shadow: 0px 2px black;
  cursor: pointer;
  transition: all 1s;

  &:hover {
  border: 1px solid red;
  text-shadow: -0px -99px white;
  color: white !important;
  text-decoration:underline wavy #ffd166 5px;
  transform: scale(1.01);
  box-shadow: rgba(9, 30, 66, .25) 0 1px 1px, rgba(9, 30, 66, .13) 0 0 1px 1px;
  }
`;

const Header:React.FC = () => {
    return (
    <div className="d-flex w-100 mw-1100 rounded-infinite bg-color-secondary hover-shadow mx-3 mx-lg-5">
      <div className="w-100 mx-4 mx-sm-5 d-flex justify-content-between align-items-center">
      <HeaderWrapper className="d-flex align-items-center justify-content-center text-light bg-color-primary p-2 rounded-infinite my-3 pb-0 fw-bold px-3 shadow-sm font-paq">
        Diction-io
      </HeaderWrapper>
      <div className="rounded-circle my-3 p-2 p-sm-3 bg-white">
        <FcSearch size="25px" />
      </div>
      </div>
    </div>
    )
};

export default Header;
