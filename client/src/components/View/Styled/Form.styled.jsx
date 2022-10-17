import styled from 'styled-components';

const Form = styled.div`
  border-radius: 50%;

  background-image: url(${props => props.img});
  background-size:cover;
    margin: 10px;
    height: 75px;
    width: 75px;

  object-fit: cover;
`;


export {Form};