import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';

const BeverageCard: React.FC = () => {
  return (
    <Container>
      <Image
        src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/04/[9200000002766]_20200416143123646.jpg"
      >
        <BrandLogo
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
        />
      </Image>
      <InfoContainer>
        <Name>피치 & 레몬 블렌디드</Name>
        <EnglishName>Peach & Lemon Blended</EnglishName>
        <Brand>스타벅스 코리아</Brand>
      </InfoContainer>
      <AbsoluteButton>
        만들러 가기 <i className="fas fa-arrow-right" />
      </AbsoluteButton>
    </Container>
  );
};

export default BeverageCard;

const Container = styled.div`
  height: 120px;
  width: 100%;
  background-color: #ffe6eb;
  margin-bottom: 12px;
  border-radius: 25px;
  box-shadow: 2px 2px 10px rgba(255, 114, 111, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  position: relative;
`;

interface IImage {
  src: string;
}

const Image = styled.div<IImage>`
  height: 90px;
  width: 90px;
  border-radius: 25px;
  box-shadow: 5px 5px 18px #ffbdc3,
    -5px -5px 20px #f5c4cb;
  background-position: center center;
  background-size: cover;
  position: relative;

  ${({ src }) => src && css`
    background-image: url(${src});
  `};
`;

const BrandLogo = styled.img`
  position: absolute;
  bottom: -5px;
  left: -5px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  transform: rotate(10deg);
  box-shadow: 1px 1px 12px rgb(3, 98, 65, 0.45);
`;

const InfoContainer = styled.div`
  margin-left: 1.2rem;
`;

const Name = styled.h2`
  margin: 0;
  font-weight: 900;
  font-size: 1.2rem;
  color: #333;
`;

const EnglishName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
  color: #888;
`;

const Brand = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.85rem;
  color: #ff7a84;
`;

const AbsoluteButton = styled(Button)`
  position: absolute;
  right: -10px;
  bottom: 15px;
  background: linear-gradient(to bottom right, #ECA9B0, #F59BA4);
  color: white;
  box-shadow: 8px 8px 16px #f5c4cb,
    -8px -8px 16px rgba(255, 255, 255, 0.2);
  font-size: 0.85rem;
  padding: 10px 15px;

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
