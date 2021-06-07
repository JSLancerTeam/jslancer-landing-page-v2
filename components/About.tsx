import { FC } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 109px 100px 55px;
  background: url('/static/images/bg_about.png') no-repeat center;
  background-size: 100%;
  background-color: rgba(0, 174, 239, 0.05);
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 36px;
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
  list-style-image: url('/static/images/style_type_16.svg');
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
  font-size: 20px;
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

const About:FC = () => (
  <Wrapper>
    <img src='/static/images/about.png' />
    <Content>
      <Title>About Us</Title>
      <Desc>
        We are a web and mobile development company from Vietnam. 
        We focus on develop rich interactive applications with React and NodeJS technologies
      </Desc>
      <List>
        <Item>
          <TitleItem>
            High technical skills
          </TitleItem>
          <DescItem>
            Our company consists of senior developers who have vast experience with React and React Native. 
            Our technical skill allow us to tackle difficult challenges and bring the best solution for your product.
          </DescItem>
        </Item>
        <Item>
          <TitleItem>
            Customer first
          </TitleItem>
          <DescItem>
            In order to be successful, we need to understand customer's vision and goal. 
            So we take a lot of time to understand our customer and their vision.
          </DescItem>
        </Item>
      </List>
    </Content>
  </Wrapper>
)

export default About;