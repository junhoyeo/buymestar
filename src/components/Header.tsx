import React from 'react';
import styled from 'styled-components';

interface IHeader {
  title: string;
  koreanTitle?: string;
  description: string;
}

const Header: React.FC<IHeader> = ({ title, koreanTitle, description }) => {
  return (
    <Container>
      <Title>
        {title}
        {koreanTitle && (
          <KoreanTitle>
            {koreanTitle}
          </KoreanTitle>
        )}
      </Title>
      <Description>
        {description}
      </Description>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  letter-spacing: -1px;
  font-size: 1.95rem;
  font-weight: 900;
  color: #333;
  margin: 0;
  text-shadow: rgba(0, 0, 0, 0.25) 3px 3px 15px;
`;

const KoreanTitle = styled.span`
  font-size: 1.25rem;
  position: relative;
  padding-left: 0.5rem;
  margin-left: 1rem;
  padding-right: 1.1rem;
  margin-right: 1.1rem;
  line-height: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2px;
    transform: translateY(-50%);
    width: 3px;
    height: 1.25rem;
    background: rgba(51, 51, 51, 0.95);
  }
`;

const Description = styled.p`
  color: #333;
  margin: 0;
  margin-top: 0.5rem;
  font-weight: bold;
  color: #888;
  text-shadow: rgba(0, 0, 0, 0.25) 3px 3px 15px;
`;
