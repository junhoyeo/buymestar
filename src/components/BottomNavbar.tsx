import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const BottomNavbar: React.FC = () => {
  return (
    <Container>
      <ButtonList></ButtonList>
      <MainButton>
        나만의 커피 만들기
      </MainButton>
    </Container>
  );
};

export default BottomNavbar;

const Container = styled.div`
  margin-top: auto;
  display: flex;
  padding: 30px 25px;
  justify-content: space-between;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  background: white;
  box-shadow: 20px 20px 60px rgba(210, 136, 141, 0.85),
    -20px -20px 60px rgba(255, 184, 191, 0.85);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const ButtonList = styled.div`
`;

const MainButton = styled(Button)`
  background: linear-gradient(to bottom right, #ECA9B0, #F59BA4);
  color: white;
  box-shadow: 8px 8px 16px #f5c4cb,
    -8px -8px 16px #ffffff;
  font-size: 1.15rem;
  padding: 25px 42px;

  &:hover,
  &:focus {
    background: linear-gradient(to bottom right, #ECA9B0, #ff8aa3);
    box-shadow: 8px 8px 16px #faacb4,
      -8px -8px 16px #fce1e5;
  }

  &:focus {
    color: #f3f3f3;
    text-shadow: 5px 5px 16px rgba(255, 122, 143, 0.48);
  }
`;
