import { FC } from 'react';
import styled from 'styled-components';
import {
  SectionContainer,
  SectionTitle,
  SectionContent,
} from './common/Section';

const StyledSectionContent = styled(SectionContent)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 45px;
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
    margin-left: 0;
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

const AboutImage = styled.img`
  border-radius: 5px;
  filter: drop-shadow(2px 4px 40px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    width: 100%;
    height: 320px;
  }
`;

const List = styled.ul`
  list-style-image: url('/static/images/style_type_16.svg');
  margin: 0;
  padding-left: 23px;
`;

const ListItem = styled.li`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484e54;
  margin: 0;
  padding-bottom: 5px;

  &::marker {
    font-size: 150%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const About: FC = () => (
  <SectionContainer>
    <SectionTitle>About Us</SectionTitle>
    <StyledSectionContent>
      <AboutImage src='/static/images/about.png' />
      <TextContent>
        <Desc>
          Started since 2015, JSLancer is a software development consultant from
          Vietnam that helps our clients build advanced user interface and data
          visualization products.
        </Desc>
        <Desc>
          Our close-knit team consists of experienced engineers who can tackle
          complex challenges and bring the best solution for your product,
          allowing you to focus on strategy, business development, and growing
          your user base with no worries.
        </Desc>
        <Desc>
          We have been working with clients from US, Singapore, Australia and
          deliver technical solutions that meet their business goals and budget.
        </Desc>

        <List>
          <ListItem>
            Advance UI with ReactJS, Redux, GraphQL, styled-components, SCSS
          </ListItem>
          <ListItem>Real-time application with Socket.</ListItem>
          <ListItem>Build data visualization applications with D3JS</ListItem>
          <ListItem>
            Write unit test and E2E to verify the functionality of an individual
            part or the whole of an application
          </ListItem>
        </List>
      </TextContent>
    </StyledSectionContent>
  </SectionContainer>
);

export default About;
