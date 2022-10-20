import styled from 'styled-components';

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
  width: 40%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
`;

export {RoundImage, StyleDiv};