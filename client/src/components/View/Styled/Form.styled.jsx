import styled from 'styled-components';

const Form = styled.form`
  border-radius: 50%;

  background-image: url(${props => props.img});
  background-size:cover;
    margin: 10px;
    height: 75px;
    width: 75px;

  object-fit: cover;
`;

const Button = styled.button`
height: 44px;
width: 330px;
display: flex;
padding: 4px 4px 4px 8px;
margin-top: 20px;
justify-content: space-between;
align-items: center;
background: #ffffff;
border-color: white;
text-align: center;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
font-size: 1.3rem;

font-weight: 500;
color: #IF2224;
&:hover {
  background-color: #f1f3f5;
}
`;

const CartContainer = styled.div`
.top-row {
  display:flex;
}
`;

export { Form, Button, CartContainer };