import { FC } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ArrowRight from './common/ArrowRight';

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 86px);
`;

const ArrowRightStyled = styled(ArrowRight)`
  width: auto;
  height: auto;
  right: 0;
  transform: translateY(-170px);
`;

const SlickDots = styled.div`
  right: 61px;
  bottom: 50%;
  transform: translateY(50%);
  width: auto;
  height: fit-content;

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  li {
    width: 20px;
    height: 20px;
    border: 1px solid #ffffff;
    background: transparent;
    margin: 0;

    &.slick-active {
      background: #00aeef;
      border-color: #00aeef;
    }

    button:before {
      content: unset;
    }
  }

  li + li {
    margin-top: 23px;
  }
`;

const Slide = styled.div<{ url: string }>`
  height: calc(100vh - 86px);
  background-position: 228px center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;

const BackgroundOverlay = styled.div`
  position: relative;
  background-color: gray;
  opacity: 1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 400% 400%;
    background-color: rgb(213 226 230 / 80%);
    opacity: 0.3;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translate(0, -50%);
  z-index: 999999;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 150px;
  line-height: 120px;
  font-family: 'Teko', sans-serif;;
  color: #00aeef;
  z-index: 99;
  margin: 0;
  text-shadow: 5px 5px 18px rgba(55, 84, 170, var(--depth)), -7px -7px 10px rgba(255, 255, 255, 0.7), -5px -5px 0px #edf0f3, 0px 0px 4px rgba(255, 255, 255, 0.2);
`;

const Desc = styled.p`
  font-family: 'Teko', sans-serif;;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: #00aeef;
  width: 341px;
  z-index: 1;
  margin: 0;
  text-shadow: 5px 5px 18px rgba(55, 84, 170, var(--depth)), -7px -7px 10px rgba(255, 255, 255, 0.7), -5px -5px 0px #edf0f3, 0px 0px 4px rgba(255, 255, 255, 0.2);
`;

const Home: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRightStyled />,
    appendDots: (dots: JSX.Element) => (
      <SlickDots>
        <ul>{dots}</ul>
      </SlickDots>
    ),
  };

  function renderSlide(url: string) {
    return (
      <BackgroundOverlay>
        <Slide url={url} />
      </BackgroundOverlay>
    );
  }

  const slides = [
    '/static/images/home-bg.jpg',
  ];

  return (
    <Wrapper>
      <TitleContainer>
        <Title>JSLANCER</Title>
        <Desc>Advance Frontend Development</Desc>
      </TitleContainer>
      <Slider {...settings}>{slides.map((url) => renderSlide(url))}</Slider>
    </Wrapper>
  );
};

export default Home;
