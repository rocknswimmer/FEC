import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';


const HeaderContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
    top: -15px;
    left: 0px;
  z-index: 2;
  padding-right: 50px;
  padding-left: 40px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  font-family: 'Bad Script', cursive;
  border-bottom: solid 4px #E8B90E;
  padding-left: 25px;

`;

const Greyjoy = styled.h1`
  font-size: 2em;
  padding-top: 20px;
  margin: 0 0 15px 30px;
`;

const Squid = styled.img`
margin: 5px;
z-index: 3;
`;

const ContainerDiv = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 10px;
  width: auto;

`;

const Header = ({ theme, themeToggler, interact }) => {


  return (
    <HeaderContainer>
      <ContainerDiv>
        <Greyjoy>House Greyjoy</Greyjoy>

        <Squid src={'logo.png'} />

      </ContainerDiv>
      <label className="switch">
        <input
          type="checkbox"
          i={<BsSunFill size={28} />} />
        <span className="slider round"
          onClick={() => { themeToggler(); interact('themeToggler', 'Header'); }}>
          <span className='sun'
            onClick={() => { themeToggler(); interact('themeToggler', 'Header'); }}>
            <BsSunFill size={22} />
          </span>
          <span className='sun'
            onClick={() => { themeToggler(); interact('themeToggler', 'Header'); }}>
            <BsMoonStarsFill
              size={18}
              style={{ 'color': 'black' }}
            />
          </span>
        </span>
      </label>

    </HeaderContainer>
  );
};




export default Header;