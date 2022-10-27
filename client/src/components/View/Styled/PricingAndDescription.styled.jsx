import styled from 'styled-components';

const SalesPricing = styled.span`
  color: red;
`;

const FormerPrice = styled.span`
  text-decoration: line-through;
`;

const DescriptionDiv = styled.div`
  padding-left: 20px;
  grid-column-start:1;
  grid-column-end: 6;
  grid-row-start: 8;
  grid-row-end: 11;
  @media (max-width: 958px) {
    grid-column-start: 1;
    grid-colum-end: 11;
    grid-row-start: 5;
    grid-row-end: 6;
}
`;

const SocialDiv = styled.div`

`;

const Fb = styled.a`
font-size: 2em;
color: #4267B2;
padding-right: 1em;
padding-top: 1em;
padding-bottom: 1em;
`;

const Twitter = styled.a`
font-size: 2em;
color: #1DA1F2;
padding: 1em;
`;

const Pinterest = styled.a`
font-size: 2em;
color: #E60023;
padding: 1em;
`;


export {SalesPricing, FormerPrice, DescriptionDiv, SocialDiv, Twitter, Fb, Pinterest};