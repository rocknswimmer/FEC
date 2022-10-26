import styled from 'styled-components';

const StyleView = styled.div`
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 8;
  @media (max-width: 958px) {
    grid-column-start: 1;
    grid-colum-end: 11;
    grid-row-start: 6;
    grid-row-end: 11;
}
`;

export { StyleView };