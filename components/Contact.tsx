import { FC } from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionTitle } from './common/Section';
import TextField from './common/TextField';

const StyledSectionContainer = styled(SectionContainer)`
  background-image: url('/static/images/bg_contact.jpg');
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484e54;
  margin: 0;
  margin-bottom: 55px;
  width: 530px;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  width: 400px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubmitButton = styled.div`
  width: 202px;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00AEEF;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #FFFFFF;
  margin-top: 70px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 132px;
    height: 50px;
  }
`

const Contact: FC = () => {
  return (
    <StyledSectionContainer>
      <SectionTitle>Get in touch</SectionTitle>
      <Desc>
        We always try to implement our creative ideas at the highest level. Tell
        us about your project and we will make it work.
      </Desc>
      <InputWrapper>
        <TextField name='name' label='Name' />
      </InputWrapper>
      <InputWrapper>
        <TextField name='email' label='Email address' />
      </InputWrapper>
      <InputWrapper>
        <TextField name='message' label='Message' />
      </InputWrapper>
      <SubmitButton>Send message</SubmitButton>
    </StyledSectionContainer>
  );
};

export default Contact;
