import styled from 'styled-components';


const DropDownContainer = styled("div")`
  margin-right: 10px;
  color: #IF2224;

`;

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 4px 4px 4px 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;

  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  width: 330px;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const DropDownListQty = styled("ul")`
  position: absolute;
  width: 150px;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  color: #IF2224;
  margin-bottom: 0.8em;
  &:hover {
    background-color: #D5DBE7;
  }
`;

export { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem, DropDownListQty };