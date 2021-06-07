import { FC } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 110px 100px 55px;
  background: url('/static/images/bg_client.png') no-repeat center;
  background-size: 100%;
  background-color: rgba(0, 174, 239, 0.05);
  margin-top: 55px;
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
  margin-bottom: 50px;
  width: 530px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 253px;
  height: 253px;
  background: #FFFFFF;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
`;

const NameClient = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #14161F;
  margin-top: 10px;
`;

const Clients: FC = () => {
  const clients = [
    { logo: 'logoCiStudio.png', name: 'C&I Studios' },
    { logo: 'logoIorad.png', name: 'Iorad' },
    { logo: 'logoTadu.png', name: 'Tadu.vn' },
    { logo: 'logoEfex.png', name: 'Efexcon' },
  ]
  return (
    <Wrapper>
      <Title>Our Clients</Title>
      <Desc>
        I would like to receive business support information from Birmingham City University 
      </Desc>
      <List>
        {clients.map((item, index) => (
          <Item key={index}>
            <img src={`/static/images/${item.logo}`} />
            <NameClient>{item.name}</NameClient>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
} 

export default Clients;