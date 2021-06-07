import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 100px 0;
`;

const Title = styled.h2`
  font-family: Teko;
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
  text-transform: uppercase;
  color: #14161F;
  margin: 0;
  margin-bottom: 50px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 70px;
  }
`;

const ContentItem = styled.div`
  width: 530px;
`;

const TitleItem = styled.h4`
  font-family: Teko;
  font-weight: bold;
  font-size: 48px;
  line-height: 147.3%;
  color: #484E54;
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
  color: #00AEEF;
  text-decoration: underline;
`;

const ImageItem = styled.img`
  width: 440px;
  height: 300px;
  object-fit: cover;
`;

const CaseStudies: FC = () => (
  <Wrapper>
    <Title>Case Studies</Title>
    <Item>
      <ContentItem>
        <TitleItem>Iorad</TitleItem>
        <DescItem>
          Iorad is a tutorial builder SaaS from US. This tool helps user create online tutorial for website. 
          It is used by LinkedIn, Medium
          <br /><br />
          This tool helps user create online tutorial for website. The whole project took us 6 months to finish.
        </DescItem>
        <LinkItem href='#'>Read More</LinkItem>
      </ContentItem>
      <ImageItem src='/static/images/iorad.png' />
    </Item>
    <Item>
      <ContentItem>
        <TitleItem>Mastering Box</TitleItem>
        <DescItem>
          MasteringBox is a SaaS service which helps music artists master their audio.
          <br /><br />
          The previous version of MasteringBox was built on top of jQuery and the
          project owner wants to convert it into React web application with a brand.
        </DescItem>
        <LinkItem href='#'>Read More</LinkItem>
      </ContentItem>
      <ImageItem src='/static/images/masterbox.png' />
    </Item>
  </Wrapper>
)

export default CaseStudies;