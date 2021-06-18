import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ArrowLeft from "./common/ArrowLeft";
import ArrowRight from "./common/ArrowRight";
import { SectionContainer, SectionContent, SectionTitle } from "./common/Section";

const StyledSectionContainer = styled(SectionContainer)`
  background: white;
  background-image: none;
  padding-bottom: 100px;
`;

const MemberWrapper = styled.div`
  margin: 0 auto;
`;

const Member = styled.div<{ url: string }>`
  background: linear-gradient(180.07deg, rgba(255, 255, 255, 0) 55.83%, #00AEEF 107.7%), url(${props => `${props.url}`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 307px;
  height: 376px;
  padding: 20px;
  box-shadow: 4px 10px 15px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 90%;
    height: 250px;
    padding: 12px;
  }
`;

const NameMember = styled.span`
  font-family: Teko;
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PositionMember = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 16px;
  }
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

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: -75px;
    top: unset;
  }
`;

const ArrowLeftStyled = styled(ArrowLeft)`
  width: auto;
  height: auto;
  right: 95px;
  left: auto;
  top: -82px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    top: unset;
    right: 50px;
    bottom: -75px;
  }
`;

const teams = [
  { image: '/static/images/team/david.png', name: 'David Tran', position: 'Lead Developer' },
  { image: '/static/images/team/kiet-nguyen.png', name: 'Kiet Nguyen', position: 'Business Manager' },
  { image: '/static/images/team/leo-phan.png', name: 'Leo Phan', position: 'Full-stack Developer' },
  { image: '/static/images/team/clement.png', name: 'Clement Le', position: 'Full-stack Developer' },
  { image: '/static/images/team/tony.png', name: 'Tony Nguyen', position: 'Frontend Developer' },
];

interface IProps {
  isMobile: boolean;
}

const Team: FC<IProps> = ({ isMobile }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
    nextArrow: <ArrowRightStyled />,
    prevArrow: <ArrowLeftStyled />,
    appendDots: () => <></>,
  };

  return (
    <StyledSectionContainer>
      <SectionTitle>MEET THE TEAM</SectionTitle>
      <SectionContent>
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
                    <img src='/static/images/team/twitter.svg' />
                  </a>
                  <a href='#'>
                    <img src='/static/images/team/github.svg' />
                  </a>
                </LinkSocial>
              </MemberWrapper>
            </div>
          ))}
        </Slider>
      </SectionContent>
    </StyledSectionContainer>
  )
}

export default Team;