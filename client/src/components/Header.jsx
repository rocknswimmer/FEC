import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';


const HeaderContainer = styled.div`
  position: fixed;
    top: -15px;
  z-index: 2;
  background-color: #34363A;
  display: flex;
  align-item: left;
  height: 150px;
  width: 100%;
  font-family: 'Bad Script', cursive;
  border-bottom: solid 4px #E8B90E;
  padding-left: 25px;
`;

const Greyjoy = styled.h1`
  font-size: 3.5em;
  padding-top: 20px;
  margin: 0 0 15px 30px;
`;

const Squid = styled.img`

z-index: 15;
`;

const Header = ({ theme, themeToggler, interact }) => {


  return (
    <HeaderContainer>
      <Greyjoy>House Greyjoy</Greyjoy>
      {/* <Squid src={require('image.png')}/> */}
      {(theme === 'light') &&
        <button className='sun'
          onClick={() => { themeToggler(); interact('themeToggler', 'Header'); }}>
          <BsSunFill size={28} />
          Theme
        </button>}

      {(theme !== 'light') &&
        <button className='moon'
          onClick={() => { themeToggler(); interact('themeToggler', 'Header'); }}>
          <BsMoonStarsFill size={28} />
        </button>}
    </HeaderContainer>
  );
};




export default Header;