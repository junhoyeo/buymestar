import React from 'react';
import styled from 'styled-components';

import BeverageCard from '../components/BeverageCard';
import BottomNavbar from '../components/BottomNavbar';
import Header from '../components/Header';
import ServiceWrapper from '../components/ServiceWrapper';

const Home: React.FC = () => {
  return (
    <ServiceWrapper>
      <Header
        title="Trending"
        koreanTitle="인기 레시피"
        description="사람들이 좋아하는 레시피를 확인하세요."
      />
      <BeverageList>
        <BeverageCard />
        <BeverageCard />
        <BeverageCard />
      </BeverageList>
      <Section />
      <BottomNavbar />
    </ServiceWrapper>
  )
};

export default Home;

const BeverageList =  styled.div`
  margin-top: 1.2rem;
`;

const Section = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44.2vh;
  width: 100%;
  background-color: #F7A0A6;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  box-shadow: 0px -5px 16px rgba(51, 51, 51, 0.15);
`;
