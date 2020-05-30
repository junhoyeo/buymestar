import styled from 'styled-components';

const Button = styled.button`
  border: none;
  margin-top: 1.5rem;
  padding: 15px 25px;
  border-radius: 50px;
  background: #F6DADB;
  box-shadow: 2px 2px 36px #EAB6BE,
    -2px -2px 16px #ffeded;
  cursor: pointer;
  font-weight: bold;
  color: #555;
  text-shadow: 2px 2px 16px rgba(255, 122, 143, 0.28);

  &:focus {
    background: #F6DADB;
    box-shadow: inset 6px 6px 16px #f5c4cb,
      inset -6px -6px 16px #ffeded;
  }
`;

export default Button;
