import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ArrowRight from "./common/ArrowRight";

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
    border: 1px solid #FFFFFF;
    background: transparent;
    margin: 0;

    &.slick-active {
      background: #00AEEF;
      border-color:  #00AEEF;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.url});
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 100px;
  line-height: 120px;
  font-family: Teko;
  color: #00AEEF;
  position: absolute;
  left: 100px;
  top: 226px;
  z-index: 1;
  margin: 0;
`;

const Desc = styled.p`
  font-family: Teko;
  font-weight: bold;
  font-size: 36px;
  line-height: 100%;
  color: #484E54;
  width: 341px;
  position: absolute;
  left: 100px;
  top: 326px;
  z-index: 1;
  margin: 0;
`;

const Home: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRightStyled />,
    appendDots: (dots: JSX.Element) => <SlickDots><ul>{dots}</ul></SlickDots>
  };

  return (
    <Wrapper>
      <Title>JSLANCER.</Title>
      <Desc>MOBILE AND WEB DEVELOPMENT COMPANY</Desc>
      <Slider {...settings}>
        <Slide url='/static/images/home1.jpeg' />
        <Slide url='/static/images/home2.jpeg' />
        <Slide url='/static/images/home3.jpeg' />
      </Slider>
    </Wrapper>
  )
}

export default Home;