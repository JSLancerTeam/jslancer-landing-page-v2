import styled from 'styled-components';

export const SectionContainer = styled.div`
  padding: 109px 100px 55px;
  background: url('/static/images/bg_about.png') no-repeat center;
  background-size: cover;
  background-color: white;

  @media (max-width: 768px) {
    padding: 30px 24px;
  }
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 72px;
  line-height: 100%;
  font-family: Teko;
  color: #14161F;
  margin: 0;
  margin-bottom: 50px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 15px;
  }
`

export const SectionContent = styled.div`
  max-width: 100%;
`;