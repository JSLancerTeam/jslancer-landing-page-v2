import { FC, useState } from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import ArrowLeft from './common/ArrowLeft';
import ArrowRight from './common/ArrowRight';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from './common/Section';

const StyledSectionContainer = styled(SectionContainer)`
  background: white;
  background-image: none;
  padding-bottom: 100px;
`;

const ContentInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Tabs = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;

const Tab = styled.span<{ active?: boolean }>`
  font-family: Teko;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;
  color: #484e54;
  margin-right: 17px;
  cursor: pointer;
  transition: font-size 0.3s ease;

  ${(props) =>
    props.active &&
    css`
      color: #00aeef;
      font-size: 48px;
      line-height: 100%;
    `}

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 120%;
    margin-right: 5px;

    ${(props) =>
      props.active &&
      css`
        font-size: 24px;
        line-height: 100%;
      `}
  }
`;

const TechItem = styled.div<{ even?: boolean }>`
  background: linear-gradient(180deg, #cceffc 0%, rgba(242, 251, 254, 0) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 254px;
  height: 313px;
  padding: 50px 0;
  margin: 0 auto;

  ${(props) =>
    props.even &&
    css`
      background: linear-gradient(
        180deg,
        #f2fbfe 0%,
        rgba(204, 239, 252, 0) 100%
      );
    `}

    @media (max-width: 768px) {
      width: 90%;
      height: 220px;
      padding: 30px 0;
    }
`;

const TechIconWrapper = styled.div`
  background: #00aeef;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  width: 131px;
  height: 131px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70%;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;

    img {
      max-width: 40%;
    }
  }
`;

const TechTitle = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ArrowRightStyled = styled(ArrowRight)`
  width: auto;
  height: auto;
  right: 0;
  top: -53px;

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
  top: -53px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    top: unset;
    right: 50px;
    bottom: -75px;
  }
`;

interface ITechnologyItem {
  image: string;
  name: string;
  width?: number | string;
}

const frontends: Array<ITechnologyItem> = [
  {
    image: 'technologies/frontend/typescript.svg',
    name: 'TypeScript',
    width: '59%',
  },
  { image: 'technologies/frontend/javascript.svg', name: 'Javascript' },
  { image: 'technologies/frontend/react.svg', name: 'React' },
  { image: 'technologies/frontend/redux.svg', name: 'Redux' },
  {
    image: 'technologies/frontend/styled-components.svg',
    name: 'Styled-components',
  },
  { image: 'technologies/frontend/graphql.svg', name: 'GraphQL' },
  { image: 'technologies/frontend/socketio.svg', name: 'SocketIO' },
];

const backends = [
  { image: 'technologies/backend/javascript.svg', name: 'Javascript' },
  { image: 'technologies/backend/node.svg', name: 'NodeJS' },
  { image: 'technologies/backend/apollo.svg', name: 'Apollo' },
  { image: 'technologies/backend/mysql.svg', name: 'MySQL' },
  { image: 'technologies/backend/mongo.svg', name: 'MongoDB' },
  { image: 'technologies/backend/graphql.svg', name: 'GraphQL' },
];

interface IProps {
  isMobile: boolean;
}

const Technology: FC<IProps> = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

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

  function renderSlide() {
    const items: Array<ITechnologyItem> =
      activeTab === 0 ? frontends : backends;
    return items.map((item, index) => (
      <div key={index}>
        <TechItem even={index % 2 === 0}>
          <TechIconWrapper>
            <img
              src={`/static/images/${item.image}`}
              style={{ width: item.width }}
            />
          </TechIconWrapper>
          <TechTitle>{item.name}</TechTitle>
        </TechItem>
      </div>
    ));
  }

  return (
    <StyledSectionContainer>
      <SectionTitle>Technology</SectionTitle>
      <SectionContent>
        <ContentInner>
          <Tabs>
            <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
              Front-end
            </Tab>
            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
              Back-end
            </Tab>
          </Tabs>
          <Slider {...settings}>{renderSlide()}</Slider>
        </ContentInner>
      </SectionContent>
    </StyledSectionContainer>
  );
};

export default Technology;
