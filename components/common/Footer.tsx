import styled from 'styled-components';

const Container = styled.div`
  padding: 30px 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    padding: 30px;
    align-items: center;
  }
`;

const SocialMediaList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const SocialMediaItem = styled.a`
  border: 1px solid #00aeef;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 61px;
  height: 61px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 26px;
    height: 26px;
  }
`;

const Copyright = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: #8a8b8c;
  display: flex;
  
  span:first-child {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    flex-direction: column;
    align-items: center;

    span:first-child {
      margin-right: 0;
    }
  }
`;

const Footer = () => (
  <Container>
    <SocialMediaList>
      <SocialMediaItem href='https://facebook.com/jslancer'>
        <img src='/static/images/social-medias/facebook.svg' />
      </SocialMediaItem>
      <SocialMediaItem href='https://github.com/jslancerteam'>
        <img src='/static/images/social-medias/github.svg' />
      </SocialMediaItem>
    </SocialMediaList>
    <Copyright>
      <span>Copyright © 2021 JSLancer.</span>
      <span>All Rights Reserved.</span>
    </Copyright>
  </Container>
);

export default Footer;
