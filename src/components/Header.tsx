/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
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
const SearchWrapper = styled.form`
  .icon {
    cursor: pointer;
    z-index: 99;
  }
  --h: 2rem;
  --w: 40vw;
  input {
    font-size: 12px;
    margin-right: calc(6px - 2rem);
    border-radius: 999px 0 0 999px;
    height: calc(25.11px + var(--h));
    transition: width .85s ease-out;
 }
 input.active {
    width: var(--w);
 }
 input.inactive {
    width: 0 !important;
    padding:0 !important;
 }

@media only screen and (max-width: 576px) {
   --h: 1rem;
}
`;

const Header: React.FC = () => {
  const [active, setActive] = useState(false)
  const [search, setSearch] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(search)
  }
  return (
    <div className="d-flex w-100 mw-1100 rounded-infinite bg-color-secondary hover-shadow mx-3 mx-lg-5">
      <div className="w-100 mx-4 mx-sm-5 d-flex justify-content-between align-items-center">
        <HeaderWrapper className="d-flex align-items-center justify-content-center text-light bg-color-primary p-2 rounded-infinite my-3 pb-0 fw-bold px-3 shadow-sm font-paq fs-3 fs-sm-1">
          Diction-io
        </HeaderWrapper>
        <SearchWrapper onSubmit={(e: React.FormEvent<HTMLInputElement>) => { handleSubmit(e) }} className="my-3 d-flex align-items-center justify-content-center">
          <input value={search} onChange={(e) => { setSearch(e.target.value) }} className={`search ${active ? 'active' : 'inactive'} font-monaco color-primary border-0 hover-shadow2 pe-5 p-2 p-sm-3 pe-sm-5`} type="text" spellCheck="false" autoComplete="false" name="search" id="search-input" placeholder="want some meaning..?" />
          <div onClick={() => { setActive(!active) }} className="icon rounded-circle p-2 p-sm-3 bg-white hover-shadow2">
            <FcSearch size="25px" />
          </div>
        </SearchWrapper>
      </div>
    </div>
  )
};

export default Header;
