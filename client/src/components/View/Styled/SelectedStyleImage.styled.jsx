import styled from 'styled-components';

const ImageContainer = styled.div`
  padding: 10px;
`;

const RoundImage = styled.div`
  border-radius: 50%;

  background-image: url(${props => props.img});
  background-position: center;
  background-size:cover;
    margin: 10px;
    height: 75px;
    width: 75px;

  object-fit: cover;
`;

const StyleDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

`;

export {RoundImage, StyleDiv, ImageContainer};