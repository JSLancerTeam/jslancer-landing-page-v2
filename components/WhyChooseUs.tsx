import { FC } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 109px 100px 55px;
  background: url('/static/images/bg_whychooseus.png') no-repeat center;
  background-size: 100%;
  background-color: rgba(0, 174, 239, 0.05);
  display: flex;
  align-items: center;
`;

const LeftContent = styled.div`
  display: flex;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  
  & + & {
    margin-left: 40px;
    margin-top: 35px;
  }
`;

const ReasonItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 202px;
  height: 201px;
  background: #FFFFFF;

  & + & {
    margin-top: 35px;
  }
`;

const ReasonValue = styled.div`
  display: flex;
  color: #00AEEF;
  font-weight: bold;

  label {
    font-family: Teko;
    font-size: 48px;
    line-height: 100%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  span {
    font-family: Teko;
    font-size: 36px;
    line-height: 100%;
  }
`;

const ReasonName = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #14161F;
  margin: 0;
`;

const RightContent = styled.div`
  margin-left: 110px;
  width: 530px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
  font-family: Teko;
  color: #14161F;
  margin: 0;
  margin-bottom: 17px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484E54;
  margin: 0;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style-image: url('/static/images/style_type_26.svg');
  margin: 0;
  padding-left: 23px;
`;

const Item = styled.li`
  padding-left: 5px;
  & + & {
    margin-top: 20px;
  }
`;

const TitleItem = styled.h4`
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  font-family: Teko;
  color: #484E54;
  margin: 0;
  margin-bottom: 5px;
`;

const DescItem = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #14161F;
  margin: 0;
`;

const WhyChooseUs:FC = () => (
  <Wrapper>
    <LeftContent>
      <Col>
        <ReasonItem>
          <ReasonValue>
            <label>100</label>
            <span>%</span>
          </ReasonValue>
          <ReasonName>Satisfied</ReasonName>
        </ReasonItem>
        <ReasonItem>
          <ReasonValue>
            <label>42</label>
            <span>+</span>
          </ReasonValue>
          <ReasonName>Satisfied Clients</ReasonName>
        </ReasonItem>
      </Col>
      <Col>
        <ReasonItem>
          <ReasonValue>
            <label>20</label>
            <span>+</span>
          </ReasonValue>
          <ReasonName>Awards Winning</ReasonName>
        </ReasonItem>
        <ReasonItem>
          <ReasonValue>
            <label>324</label>
            <span>+</span>
          </ReasonValue>
          <ReasonName>Successful Projects</ReasonName>
        </ReasonItem>
      </Col>
    </LeftContent>
    <RightContent>
      <Title>Why choose us</Title>
      <Desc>
        We’ve got a lot of awards for ourproducts and services that became popular in the world.
      </Desc>
      <List>
        <Item>
          <TitleItem>
            Modern Technologies
          </TitleItem>
          <DescItem>
            Our company consists of senior developers who have vast experience with React and React Native challenges and bring the best solution  
          </DescItem>
        </Item>
        <Item>
          <TitleItem>
            Huge Digital Experience
          </TitleItem>
          <DescItem>
            In order to be successful, we need to understand customer's vision and goal. 
            So we take a lot of time to understand our customer and their vision.
          </DescItem>
        </Item>
      </List>
    </RightContent>
  </Wrapper>
)

export default WhyChooseUs;