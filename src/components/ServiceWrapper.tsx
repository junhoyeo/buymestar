import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <Layout>
      <ScreenWrapper>
        <LeftContentWrapper>
          <LeftContentContainer>
            <Illust
              src="/static/illusts/CoffeeDoddle.png"
            />
            <Title>Buy me star</Title>
            <Description>
              직접 만드는 나만의 커피.<br />
              <strong>바이미스타</strong>는 혼란한 카페 메뉴판 앞에서<br />
              정신을 잃은 당신을 도와줍니다.
            </Description>
            <ButtonRow>
              <Button>
                <i className="fab fa-github" /> 프로젝트 깃허브
              </Button>
              <Button>
                <i className="fas fa-palette" /> 포트폴리오
              </Button>
            </ButtonRow>
          </LeftContentContainer>
        </LeftContentWrapper>
        <Screen>
          {children}
        </Screen>
      </ScreenWrapper>
    </Layout>
  );
};

const Layout = styled.main`
  height: 100%;
  min-height: 100vh;
  background-color: #F6DADB;
  display: flex;
  justify-content: center;
`;

const ScreenWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const LeftContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
`;

const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Illust = styled.img`
  width: 312px;
  filter:
    drop-shadow(3px 3px 8px rgba(255, 122, 143, 0.5))
    drop-shadow(-2px -2px 6px rgba(191, 207, 255, 0.3));
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  font-weight: 900;
  color: #333;
  text-shadow: 2px 2px 16px rgba(255, 122, 143, 0.28);
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 400;
  color: #444;
  text-shadow: 2px 2px 16px rgba(255, 122, 143, 0.28);
  text-align: center;
`;

const Screen = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  height: calc(100vh - 45px);
  box-shadow: 31px 31px 62px #EAB6BE,
    -31px -31px 62px #FAE0E0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const ButtonRow = styled.div`
  button:first-child {
    margin-right: 0.8rem;
  }
`;

export default ServiceWrapper;
