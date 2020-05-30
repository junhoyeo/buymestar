import React from 'react';
import styled from 'styled-components';

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
      <Section />
      <BottomNavbar />
    </ServiceWrapper>
  )
};

export default Home;

const Section = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45vh;
  width: 100%;
  background-color: #F7A0A6;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
`;
