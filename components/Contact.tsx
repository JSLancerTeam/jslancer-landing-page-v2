import { FC } from "react";
import styled from "styled-components";
import TextField from "./common/TextField";

const Wrapper = styled.div`
  padding: 75px 100px 110px;
  background: url('/static/images/bg_contact.png') no-repeat center;
  background-size: 100%;
  background-color: rgba(0, 174, 239, 0.05);
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
  font-family: Teko;
  color: #14161F;
  margin: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484E54;
  margin: 0;
  margin-bottom: 55px;
  width: 530px;
`;

const Contact: FC = () => {
  return (
    <Wrapper>
      <Title>Get in touch</Title>
      <Desc>
        We always try to implement our creative ideas at the highest level. 
        Tell us about your project and we will make it work.
      </Desc>
      <TextField name='name' label='Your name' />
    </Wrapper>
  )
}

export default Contact;