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
background: #ffffff;
padding: 15px 32px;
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
display: grid;
grid-template-columns: repeat(10, minmax(0, 1fr));
grid-template-rows: repeat(2, 1fr);
`;

export { Form, Button, CartContainer };