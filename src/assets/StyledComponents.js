import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.color ? props.color : 'none'};
`;

const Text = styled.h3`
  margin: 10px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px;
`;

const Label = styled.label`
  margin: 5px;
  input {
    margin: 5px;
  }
`;

export {
  Container,
  Text,
  Button,
  Label
};