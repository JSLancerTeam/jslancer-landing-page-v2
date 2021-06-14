import { FC } from 'react';
import styled from 'styled-components';
import TextField from './common/TextField';

const Wrapper = styled.div`
  padding: 75px 100px 110px;
  background: url('/static/images/home-bg.jpg') no-repeat center;
  background-size: 100%;
  background-color: rgba(0, 174, 239, 0.05);
  filter: blur(4px);
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
  font-family: Teko;
  color: #14161f;
  margin: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484e54;
  margin: 0;
  margin-bottom: 55px;
  width: 530px;
`;

const InputWrapper = styled.div`
  width: 400px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.div`
  width: 400px;
`

const Contact: FC = () => {
  return (
    <Wrapper>
      <Title>Get in touch</Title>
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
    </Wrapper>
  );
};

export default Contact;
