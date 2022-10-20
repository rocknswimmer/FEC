import styled from 'styled-components';
const ComponentBlock = styled.div`
  grid-column-start: 1;
  grid-column-end:7;
  grid-row-start: 1;
  grid-row-end: 8;
`;

const MainImage = styled.div`
  cursor: zoom-in;
  display: grid;
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
  cursor: auto;
  width: 40%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
`;
const PhotoColumn = styled.div`
  cursor: auto;
  display: flex;
  margin-left: 30%;
  flex-direction: column;
  grid-row-start 2;
  grid-row-end: 10;
`;

const Thumbnails = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size:cover;
    margin: 2 px;
    height: 75px;
    width: 75px;

  object-fit: cover;
`;

const LeftArrow = styled.div`
  cursor: auto;
  grid-column-start: 3;
  grid-row-start: 6;

`;

const RightArrow = styled.div`
cursor: auto;
grid-column-start: 10;
grid-row-start: 6;
`;

const Expander = styled.div`
cursor: auto;
grid-column-start: 10;
`;

export { MainImage, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander, PhotoColumn, Thumbnails };

    // margin: 10px;
    // height: 75px;
    // width: 75px;