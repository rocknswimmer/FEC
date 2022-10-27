import styled from 'styled-components';



const ComponentBlock = styled.div`
  grid-column-start: 1;
  grid-column-end:7;
  grid-row-start: 1;
  grid-row-end: 8;
  display: flex;
  @media (max-width: 958px) {
    grid-column-start: 1;
    grid-column-end: 11;
    grid-row-start:1;
    grid-row-end: 5;
}
`;

const MainImage = styled.div`
  cursor: url(magnifying-glass-solid-32-32.svg) 0 0, auto;
  display: grid;
  font-size: 3em;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-template-rows: repeat(10, minmax(0, 1fr));
  background-image: url(${props => props.img});
  margin-left: 20px;
  margin-right: 20px;
  height: 100%;
  background-position: 25% 0%;
  background-size: cover;
    height: auto;
    overflow: hidden;

  svg {
    stroke: #333;
    stroke-width: 20px;
    fill: white;
  }
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
  align-items: center;
  cursor: pointer
`;

const Thumbnails = styled.div`
  background-image: url(${props => props.img});
  border: ${props => props.photoIndex === props.origIndex ? 'solid white 2px' : 'none'};
  border-bottom: ${props => props.photoIndex === props.origIndex ? 'solid white 5px' : 'none'};
  background-position: center;
  background-size:cover;
    margin: 2 px;
    height: 75px;
    width: 75px;
  object-fit: cover;
  cursor: pointer
`;

const LeftArrow = styled.div`
  grid-column-start: 3;
  grid-row-start: 6;
  z-index: 1;
  cursor: pointer
`;

const RightArrow = styled.div`
grid-column-start: 10;
grid-column-end: 11;
grid-row-start: 6;
z-index: 1;
cursor: pointer
`;

const Expander = styled.div`
cursor: auto;
grid-column-start: 10;
grid-row-start: 1;
`;

const ExpandedImageDiv = styled.div`
  margin: auto;

`;

const ModalPop = styled.div`
display: flex;
align-items: center;
object-fit: fill;
overflow: hidden;
background: black;
border: 2px solid #aaa;
z-index: 15;
margin: auto;
position: fixed;
top: 50%;
left: 50%;
max-width: 95vh;
max-height: 95vw;
cursor: zoom-in;
transform: translate(-50%, -50%);

svg {
  stroke: #333;
  stroke-width: 20px;
  fill: white;
  cursor: pointer;
}
`;

const ModalPhoto = styled.img`
  transform: ${props => props.isZoomed ? 'scale(2.5, 2.5)' : 'scale(1)'};
  transform-origin: ${props => props.mouseLocation};
  max-height: 95vh;
  max-width: 95vw;

`;

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 2;
background-color: rgb(0, 0, 0);
opacity: 0.85;
cursor: auto;
`;

const ExpandedPhotoControls = styled.div`
width: 100%;
display: flex;
font-weight: 1em;
flex-direction: row;
position: fixed;
justify-content: space-between;
z-index: 12;
`;

const IconHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 4;
  position: fixed;
  top: 90%;

`;

const EmptyDivForClicking = styled.div`
  grid-column-start:2;
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 11;
  margin-left: 20px;
  background-color: #000;
  opacity: 0;

`;

export { MainImage, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander, PhotoColumn, Thumbnails, ExpandedImageDiv, ModalPop, ModalPhoto, ModalOverlay, IconHolder, ExpandedPhotoControls, EmptyDivForClicking };


// background-image: url(${props => props.img});