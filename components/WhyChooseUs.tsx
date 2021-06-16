import { FC } from 'react';
import styled from 'styled-components';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from './common/Section';

const StyledSectionContainer = styled(SectionContainer)`
  background-image: url('/static/images/bg_whychooseus.png');
  background-color: rgba(0, 174, 239, 0.05);
`;

const ContentInner = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 40px;
    margin-top: 35px;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const ReasonItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 202px;
  height: 201px;
  background: #ffffff;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 40px rgba(0, 0, 0, 0.1));

  & + & {
    margin-top: 35px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ReasonValue = styled.div`
  display: flex;
  color: #00aeef;
  font-weight: bold;

  label {
    font-family: Teko;
    font-size: 48px;
    line-height: 100%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  span {
    font-family: Teko;
    font-size: 36px;
    line-height: 100%;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

const ReasonName = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #14161f;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
      font-size: 14px;
    }
`;

const RightContent = styled.div`
  margin-left: 110px;
  max-width: 600px;

  @media (max-width: 768px) {
    order: -1;
    margin-left: 0;
  }
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484e54;
  margin: 0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 149%;
  }
`;

const List = styled.ul`
  list-style-image: url('/static/images/style_type_26.svg');
  margin: 0;
  padding-left: 23px;

  @media (max-width: 768px) {
    list-style-image: url('/static/images/style_type_16.svg');
    margin-bottom: 40px;
  }
`;

const Item = styled.li`
  padding-left: 5px;

  &::marker {
    font-size: 150%;
  }

  & + & {
    margin-top: 30px;
  }
`;

const TitleItem = styled.h4`
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  font-family: Teko;
  color: #484e54;
  margin: 0;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DescItem = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #14161f;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 149%;
  }
`;

const WhyChooseUs: FC = () => (
  <StyledSectionContainer>
    <SectionTitle>Why choose us?</SectionTitle>
    <SectionContent>
      <ContentInner>
        <LeftContent>
          <Col>
            <ReasonItem>
              <ReasonValue>
                <label>100</label>
                <span>%</span>
              </ReasonValue>
              <ReasonName>Satisfied Clients</ReasonName>
            </ReasonItem>
            <ReasonItem>
              <ReasonValue>
                <label>4.5</label>
                <span>+</span>
              </ReasonValue>
              <ReasonName>Stars on Upwork</ReasonName>
            </ReasonItem>
          </Col>
          <Col>
            <ReasonItem>
              <ReasonValue>
                <label>20</label>
                <span>+</span>
              </ReasonValue>
              <ReasonName>Successful Projects</ReasonName>
            </ReasonItem>
            <ReasonItem>
              <ReasonValue>
                <label>100</label>
                <span>%</span>
              </ReasonValue>
              <ReasonName>Job Success on Upwork</ReasonName>
            </ReasonItem>
          </Col>
        </LeftContent>
        <RightContent>
          <Desc>
            We’ve got a lot of awards for ourproducts and services that became
            popular in the world.
          </Desc>
          <List>
            <Item>
              <TitleItem>Experienced and skilled Front-end Developers</TitleItem>
              <DescItem>
                Our company consists of senior developers who have vast experience with Front-end Development. 
                We work endlesslyto ensure our partnership with clients moves forward in only thebest way. 
                Every new project becomes our goal and together with our clients, we create synergy, 
                believing that together we'll reach our goal faster.
              </DescItem>
            </Item>
            <Item>
              <TitleItem>Customer-First</TitleItem>
              <DescItem>
                In our company, success in achieving customer-centricity and customer loyalty is no longera differentiator. 
                It has become a matter of survival. By combining professionalism, engagement in the projects, 
                and creativity, as anagency we can use the potential of the companies we serve to thefullest 
                and contribute to their further development. 
                The successes of our clients are our successes, too - successes 
                we reach together by taking advantage of the constantly Front-end Developing service offered by JSLancer.
              </DescItem>
            </Item>
          </List>
        </RightContent>
      </ContentInner>
    </SectionContent>
  </StyledSectionContainer>
);

export default WhyChooseUs;
