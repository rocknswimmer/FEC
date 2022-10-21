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
background: #fff;
border: 2px solid #aaa;
object-fit: contain;
border-radius: 5px;
z-index: 2;
margin: auto;
overflow-y: scroll;
overflow: scroll;
position: fixed;
top: 50%;
left: 50%;
max-width: 95vh;
max-height: 95vw;
transform: translate(-50%, -50%);
svg {
  color: purple;
}
`;

const ModalPhoto = styled.img`
  transform: ${props => props.isZoomed ? 'scale(2.5, 2.5)' : null};
  transform-origin: ${props => props.mouseLocation};
  background-position: center;
  background-size:cover;
  max-height: 100vh;
  max-width: 100vw;
  object-fit: cover;
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

export { MainImage, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander, PhotoColumn, Thumbnails, ExpandedImageDiv, ModalPop, ModalPhoto, ModalOverlay };


// background-image: url(${props => props.img});