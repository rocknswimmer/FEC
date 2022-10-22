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
  height: 100%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size:cover;
    width: auto;
    height: atuo;

    overflow: hidden;
  object-fit: cover;
  svg {
    stroke: #333;
    stroke-width: 20px;
    fill: #C5D7D9;
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
`;

const Thumbnails = styled.div`
  background-image: url(${props => props.img});
  border: ${props => props.photoIndex === props.origIndex ? 'solid white 2px' : 'none'};
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

const ExpandedImageDiv = styled.div`
  margin: auto;
  position: fixed;
`;

const ModalPop = styled.div`
display: flex;
align-items: center;
object-fit: fill;
overflow: hidden;
background: black;
border: 2px solid #aaa;
z-index: 2;
margin: auto;
position: fixed;
top: 50%;
left: 50%;
max-width: 95vh;
max-height: 95vw;
transform: translate(-50%, -50%);
svg {
  stroke: #333;
  stroke-width: 20px;
  fill: #C5D7D9;
  cursor: pointer;
}
`;

const ModalPhoto = styled.img`
  transform: ${props => props.isZoomed ? 'scale(2.5, 2.5)' : null};
  transform-origin: ${props => props.mouseLocation};
  max-height: 100vh;
  max-width: 100vw;
`;

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
background-color: rgb(0, 0, 0);
opacity: 0.75;
`;

const ExpandedPhotoControls = styled.div`
width: 100%;
display: flex;
font-weight: 1em;
flex-direction: row;
position: fixed;
justify-content: space-between;
z-index: 4;
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

export { MainImage, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander, PhotoColumn, Thumbnails, ExpandedImageDiv, ModalPop, ModalPhoto, ModalOverlay, IconHolder, ExpandedPhotoControls };


// background-image: url(${props => props.img});