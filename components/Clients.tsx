import { FC } from 'react';
import styled from 'styled-components';
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from './common/Section';

const StyledSectionContainer = styled(SectionContainer)`
  background: url('/static/images/bg_client.png') no-repeat center;
  background-size: 100%;
  background-color: rgba(0, 174, 239, 0.05);
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #484e54;
  margin: 0;
  margin-bottom: 50px;
  width: 530px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  border-radius: 3px;
  background: #ffffff;
  margin-right: 10px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);

  &:last-child {
    margin-right: 0;
  }
`;

const NameClient = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #14161f;
  margin-top: 20px;
  opacity: 0.5;
`;

interface IClientLogo {
  width?: number;
}

const ClientLogo = styled.img<IClientLogo>`
  width: ${(props) => (props.width ? props.width : 40)}px;
`;

interface IClient {
  logo: string;
  name: string;
  width?: number;
}

const Clients: FC = () => {

  const clients: Array<IClient> = [
    { logo: 'cistudios.png', name: 'C&I Studios' },
    { logo: 'iorad.png', name: 'Iorad', width: 50 },
    { logo: 'nugit.png', name: 'Nugit', width: 80 },
    { logo: 'fairprice.png', name: 'Fairprice.com.sg', width: 100 },
    { logo: 'fivegrid.png', name: 'Fivegrid', width: 100 },
  ];

  return (
    <StyledSectionContainer>
      <SectionTitle>Our Clients</SectionTitle>
      <SectionContent>
        <Desc>
          I would like to receive business support information from Birmingham
          City University
        </Desc>
        <List>
          {clients.map((item, index) => (
            <Item key={index}>
              <ClientLogo
                src={`/static/images/clients/${item.logo}`}
                width={item.width}
              />
              <NameClient>{item.name}</NameClient>
            </Item>
          ))}
        </List>
      </SectionContent>
    </StyledSectionContainer>
  );
};

export default Clients;
