import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ArrowLeft from "./common/ArrowLeft";
import ArrowRight from "./common/ArrowRight";

const Wrapper = styled.div`
  padding: 120px 100px 60px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
  font-family: Teko;
  text-transform: uppercase;
  color: #14161F;
  margin: 0;
  margin-bottom: 15px;
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484E54;
  width: 530px;
  margin: 0;
  margin-bottom: 35px;
`;

const Content = styled.div``;

const MemberWrapper = styled.div`
  margin: 0 auto;
`;

const Member = styled.div<{ url: string }>`
  background: linear-gradient(180.07deg, rgba(255, 255, 255, 0) 55.83%, #00AEEF 107.7%), url(${props => `${props.url}`});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 307px;
  height: 376px;
  padding: 20px;
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

const NameMember = styled.span`
  font-family: Teko;
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

const PositionMember = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

const LinkSocial = styled.div`
  display: flex;
  padding-left: 10px;
  margin-top: 15px;

  a + a {
    margin-left: 10px;
  }
`;

const ArrowRightStyled = styled(ArrowRight)`
  width: auto;
  height: auto;
  right: 0;
  top: -82px;
`;

const ArrowLeftStyled = styled(ArrowLeft)`
  width: auto;
  height: auto;
  right: 95px;
  left: auto;
  top: -82px;
`;

const teams = [
  { image: '/static/images/team/david.png', name: 'David Tran', position: 'Lead Developer' },
  { image: '/static/images/team/leo-phan.png', name: 'Leo Phan', position: 'Full-stack Developer' },
  { image: '/static/images/team/clement.png', name: 'Clement Le', position: 'Full-stack Developer' },
  { image: '/static/images/team/tony.png', name: 'Tony Nguyen', position: 'Frontend Developer' },
];

const Team: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowRightStyled />,
    prevArrow: <ArrowLeftStyled />,
    appendDots: () => <></>,
  };

  return (
    <Wrapper>
      <Title>MEET THE TEAM</Title>
      <Desc>We are grateful to know you are interested in our content and services. Subscribe</Desc>
      <Content>
        <Slider {...settings}>
          {teams.map((item, index) => (
            <div key={index}>
              <MemberWrapper>
                <Member url={item.image}>
                  <NameMember>{item.name}</NameMember>
                  <PositionMember>{item.position}</PositionMember>
                </Member>
                <LinkSocial>
                  <a href='#'>
                    <img src='/static/images/twitter.svg' />
                  </a>
                  <a href='#'>
                    <img src='/static/images/github.svg' />
                  </a>
                </LinkSocial>
              </MemberWrapper>
            </div>
          ))}
        </Slider>
      </Content>
    </Wrapper>
  )
}

export default Team;