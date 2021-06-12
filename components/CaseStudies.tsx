import { FC } from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionTitle } from './common/Section';

const StyledSectionContainer = styled(SectionContainer)`
  background: white;
  background-image: none;
`;

const ImageItem = styled.img`
  max-width: 50%;
  margin-left: 80px;
  object-fit: cover;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 40px rgba(0, 0, 0, 0.1));
`;

const CaseStudyItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 100px;

  & + & {
    margin-top: 70px;
  }
`;

const ContentItem = styled.div``;

const TitleItem = styled.h4`
  font-family: Teko;
  font-weight: bold;
  font-size: 48px;
  line-height: 147.3%;
  color: #484e54;
  margin: 0;
  margin-bottom: 40px;
`;

const DescItem = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #000000;
  margin: 0;
  margin-bottom: 20px;
`;

const LinkItem = styled.a`
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #00aeef;
  text-decoration: underline;
`;

const CaseStudies: FC = () => (
  <StyledSectionContainer>
    <SectionTitle>Case Studies</SectionTitle>
    <CaseStudyItem>
      <ContentItem>
        <TitleItem>Iorad</TitleItem>
        <DescItem>
          Iorad provides a simple solution for creating guided step-by-step
          tutorials, instructions, and knowledge base articles for any desktop
          or web application.
        </DescItem>
        <DescItem>
          Our team worked with Iorad to implement the new frontend UI include
          the landing page, tutorial management page, and the web tutorial
          player.
        </DescItem>
        <DescItem>
          <strong>Client:</strong> Iorad.com
        </DescItem>
        <DescItem>Technologies: React, Redux, Scss, Axios, Backbonejs</DescItem>
      </ContentItem>
      <ImageItem src='/static/images/iorad.png' />
    </CaseStudyItem>
    <CaseStudyItem>
      <ContentItem>
        <TitleItem>Nugit</TitleItem>
        <DescItem>
          Nugit is a data storytelling platform that transforms your business
          data into graphs, pie, and line charts and helps you understand your
          data better.
        </DescItem>
        <DescItem>
          JSLancer provides frontend development consultant service for Nugit.
          One developer of our team joins Nugit as a full-time developer.
        </DescItem>
        <DescItem>Client: Nugit.co - Singapore</DescItem>
      </ContentItem>
      <ImageItem src='/static/images/nugit.png' />
    </CaseStudyItem>
    <CaseStudyItem>
      <ContentItem>
        <TitleItem>Fivegrid</TitleItem>
        <DescItem>
          Fivegrid is a SaaS product that simplifies digital marketing campaign
          activation and management across multiple channels including Search,
          Social and Native Display.
        </DescItem>
        <DescItem>
          JSLancer provides frontend development consultant service for
          Fivegrid.
        </DescItem>
        <DescItem>Client: Fivegrid.tech - Australia</DescItem>
      </ContentItem>
      <ImageItem src='/static/images/fivegrid.png' />
    </CaseStudyItem>
  </StyledSectionContainer>
);

export default CaseStudies;
