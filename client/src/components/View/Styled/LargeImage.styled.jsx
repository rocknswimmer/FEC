import styled from 'styled-components';
const ComponentBlock = styled.div`
  grid-column-start: 1;
  grid-column-end:7;
  grid-row-start: 1;
  grid-row-end: 8;
`;

const MainImage = styled.div`
  display: gird;
  font-size: 3em;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-template-rows: repeat(10, minmax(0, 1fr));
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size:cover;
    width: auto;
    height: atuo;
    color: red;
    overflow: hidden;
  object-fit: cover;
`;

const ExpandedView = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
`;

const LeftArrow = styled.div`
  grid-column-start: 3;
  grid-row-start: 6;

`;

const RightArrow = styled.div`
grid-column-start: 5;
grid-row-start: 6;
`;

const Expander = styled.div`
`;

export { MainImage, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander };

    // margin: 10px;
    // height: 75px;
    // width: 75px;