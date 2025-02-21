import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJs } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";



const scrollLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const scrollRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;
const scrollSlow =keyframes`
 from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
 gap: 2rem !important;
  padding: 2rem 0;
  font-family: 'Geist', sans-serif;
    @media (max-width: 768px) {
   gap:3em !important;
   margin-top:20px;
  }
`;

const Slider = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 2rem 0;
`;

const SliderContent = styled.div`
  display: flex;
  width: calc(200%);
  animation: ${({ direction }) => (direction === 'right' ? scrollSlow: scrollLeft)} 20s linear infinite;
  align-items: center;
 &:hover {
    animation-play-state: paused;
  
`;

const TextBox = styled.div`
  font-size: 1rem;
  color: #14213d;
  font-weight: bold;
  padding: 0 2rem;
  flex: 0 0 auto;
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogoBox = styled.div`
  font-size: 4rem;
  color: #61dafb;
  flex: 0 0 auto;
  padding: 0 5rem;
  justify-content: space-evenly;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const InfiniteScrollSlider = () => {
  const logos = [
    <FaReact />,
    <FaHtml5 style={{ color: '#e44d26' }} />,
    <FaCss3Alt style={{ color: '#1572b6' }} />,
    <FaBootstrap style={{ color: '#563d7c' }} />,
    <FaGitAlt style={{ color: '#f1502f' }} />,
    <VscVscode />,

    <FaJs style={{ color: '#f7df1e' }} />,
  ];

  const textItems = [
    <TextBox>CODE</TextBox>,
    <TextBox> DESIGN</TextBox>,
    <TextBox> DEPLOY</TextBox>,
    <TextBox> DEBUG</TextBox>,
    <TextBox> INNOVATE</TextBox>,
  ];

  return (
    <Container >
      {/* Top Scrolling Text */}
      <Slider style={{ background: '#eef0ff',padding: 'revert' }}>
        <SliderContent direction="right">
          {textItems.concat(textItems).map((item, index) => (
            <TextBox key={index}>{item}</TextBox>
          ))}
        </SliderContent>
      </Slider>

      {/* Middle Scrolling Logos */}
      <Slider>
        <SliderContent direction="slow">
          {logos.concat(logos).map((item, index) => (
            <LogoBox key={index}>{item}</LogoBox>
          ))}
        </SliderContent>
      </Slider>

      {/* Bottom Scrolling Text */}
      <Slider style={{ background: '#eef0ff',padding: 'revert' }}>
        <SliderContent direction="right">
          {textItems.concat(textItems).map((item, index) => (
            <TextBox key={index}>{item}</TextBox>
          ))}
        </SliderContent>
      </Slider>
    </Container>
  );
};

export default InfiniteScrollSlider;
