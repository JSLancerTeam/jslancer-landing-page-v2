import { FC, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 86px;
  border-bottom: 2px solid #00AEEF;

  @media (max-width: 768px) {
    height: 68px;
    border-width: 1px;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  display: block;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 15px;
    width: 128px;
  }
`;

const RightContent = styled.div<{ isShow: boolean }>`
  display: flex;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    z-index: 11;
    width: calc(100% - 30px);
    height: calc(100vh - (68px + 30px));
    top: 68px;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    background: #ffffff;

    ${props => props.isShow && css`
      display: flex;
    `}
  }
`;

const NavWrapper = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;

const LinkStyled = styled.a`
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #484E54;
  padding-right: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-right: 0;

    & + & {
      margin-top: 20px;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 80px;
  margin-right: 245px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ContactStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 100%;
  background: #00AEEF;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    display: block;
    position: unset;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #484E54;
    background: transparent;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    margin-top: 20px;
  }
`;

const MenuBtn = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  background: #00AEEF;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const TopBar: FC = () => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  function toggleMenu(): void {
    setIsActiveMenu(!isActiveMenu);
  }

  return (
    <HeaderWrapper>
      <Logo src="/static/images/logo.png" alt="Jslancer Logo" />
      <RightContent isShow={isActiveMenu}>
        <NavWrapper>
          <Link href="#">
            <LinkStyled>Home</LinkStyled>
          </Link>{' '}
          <Link href="#about">
            <LinkStyled>About</LinkStyled>
          </Link>{' '}
          <Link href="#portfolio">
            <LinkStyled>Portfolio</LinkStyled>
          </Link>
          <Link href="#team">
            <LinkStyled>Team</LinkStyled>
          </Link>
          <Link href="#blog">
            <LinkStyled>Blog</LinkStyled>
          </Link>
          <Link href="#contact">
            <ContactStyled>Contact</ContactStyled>
          </Link>
        </NavWrapper>
        <IconWrapper>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.2302 0C4.578 0 0 4.578 0 10.2302C0 14.757 2.92839 18.5805 6.99488 19.936C7.50639 20.0256 7.6982 19.7187 7.6982 19.4501C7.6982 19.2071 7.68542 18.4015 7.68542 17.5447C5.11509 18.0179 4.45012 16.9181 4.24552 16.3427C4.13043 16.0486 3.63171 15.1407 3.19693 14.8977C2.83887 14.7059 2.32736 14.2327 3.18414 14.2199C3.98977 14.2071 4.56521 14.9616 4.75703 15.2685C5.67774 16.8158 7.14833 16.3811 7.73657 16.1125C7.82608 15.4476 8.09462 15 8.38874 14.7442C6.11253 14.4885 3.73401 13.6061 3.73401 9.69309C3.73401 8.58055 4.13043 7.65984 4.7826 6.94373C4.6803 6.68797 4.32225 5.63938 4.88491 4.23273C4.88491 4.23273 5.74168 3.96419 7.6982 5.28133C8.51662 5.05115 9.38618 4.93606 10.2557 4.93606C11.1253 4.93606 11.9949 5.05115 12.8133 5.28133C14.7698 3.9514 15.6266 4.23273 15.6266 4.23273C16.1892 5.63938 15.8312 6.68797 15.7289 6.94373C16.3811 7.65984 16.7775 8.56777 16.7775 9.69309C16.7775 13.6189 14.3862 14.4885 12.11 14.7442C12.4808 15.0639 12.8005 15.6777 12.8005 16.6368C12.8005 18.0051 12.7877 19.1048 12.7877 19.4501C12.7877 19.7187 12.9795 20.0383 13.491 19.936C15.5219 19.2504 17.2866 17.9452 18.5368 16.204C19.787 14.4629 20.4597 12.3736 20.4603 10.2302C20.4603 4.578 15.8823 0 10.2302 0Z" fill="#00AEEF"/>
          </svg>
          <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 5C27.75 3.125 27.5 1.75 26.75 1.25C26 0.625 19.5 0.5 14.5 0.5C9.5 0.5 3 0.625 2.25 1.25C1.5 1.75 1.25 3.125 1 5C0.75 6.875 0.75 8 0.75 9.25C0.75 10.5 0.75 11.625 1 13.5C1.25 15.375 1.5 16.75 2.25 17.25C3 17.875 9.5 18 14.5 18C19.5 18 26 17.875 26.75 17.25C27.5 16.75 27.75 15.375 28 13.5C28.25 11.625 28.25 10.5 28.25 9.25C28.25 8 28.25 6.875 28 5ZM12 13.75V4.75L19.5 9.25L12 13.75Z" fill="#00AEEF"/>
          </svg>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.2302 0C4.578 0 0 4.578 0 10.2302C0 14.757 2.92839 18.5805 6.99488 19.936C7.50639 20.0256 7.6982 19.7187 7.6982 19.4501C7.6982 19.2071 7.68542 18.4015 7.68542 17.5447C5.11509 18.0179 4.45012 16.9181 4.24552 16.3427C4.13043 16.0486 3.63171 15.1407 3.19693 14.8977C2.83887 14.7059 2.32736 14.2327 3.18414 14.2199C3.98977 14.2071 4.56521 14.9616 4.75703 15.2685C5.67774 16.8158 7.14833 16.3811 7.73657 16.1125C7.82608 15.4476 8.09462 15 8.38874 14.7442C6.11253 14.4885 3.73401 13.6061 3.73401 9.69309C3.73401 8.58055 4.13043 7.65984 4.7826 6.94373C4.6803 6.68797 4.32225 5.63938 4.88491 4.23273C4.88491 4.23273 5.74168 3.96419 7.6982 5.28133C8.51662 5.05115 9.38618 4.93606 10.2557 4.93606C11.1253 4.93606 11.9949 5.05115 12.8133 5.28133C14.7698 3.9514 15.6266 4.23273 15.6266 4.23273C16.1892 5.63938 15.8312 6.68797 15.7289 6.94373C16.3811 7.65984 16.7775 8.56777 16.7775 9.69309C16.7775 13.6189 14.3862 14.4885 12.11 14.7442C12.4808 15.0639 12.8005 15.6777 12.8005 16.6368C12.8005 18.0051 12.7877 19.1048 12.7877 19.4501C12.7877 19.7187 12.9795 20.0383 13.491 19.936C15.5219 19.2504 17.2866 17.9452 18.5368 16.204C19.787 14.4629 20.4597 12.3736 20.4603 10.2302C20.4603 4.578 15.8823 0 10.2302 0Z" fill="#00AEEF"/>
          </svg>
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7009 2.45688C17.05 2.74532 16.3507 2.94022 15.6156 3.02831C16.3741 2.57444 16.9416 1.8601 17.2121 1.01858C16.4995 1.44187 15.7195 1.73983 14.9062 1.89949C14.3592 1.31549 13.6347 0.9284 12.8452 0.798327C12.0557 0.668254 11.2454 0.802473 10.54 1.18014C9.83457 1.55782 9.27359 2.15781 8.94413 2.88697C8.61466 3.61614 8.53515 4.43368 8.71793 5.21266C7.27392 5.14016 5.8613 4.76484 4.57173 4.11106C3.28216 3.45727 2.14447 2.53964 1.2325 1.41772C0.920672 1.95562 0.741371 2.57928 0.741371 3.24347C0.741023 3.84139 0.888267 4.43016 1.17004 4.95753C1.45181 5.4849 1.8594 5.93457 2.35664 6.26664C1.77997 6.24829 1.21603 6.09247 0.711747 5.81215V5.85892C0.711689 6.69754 1.00177 7.51035 1.53278 8.15943C2.06378 8.80852 2.803 9.2539 3.625 9.42C3.09005 9.56478 2.52919 9.5861 1.98478 9.48237C2.2167 10.2039 2.66846 10.8349 3.27682 11.287C3.88517 11.7391 4.61967 11.9896 5.37747 12.0035C4.09105 13.0134 2.50233 13.5611 0.866882 13.5587C0.577179 13.5588 0.287721 13.5419 0 13.5081C1.66008 14.5754 3.59252 15.1419 5.56613 15.1397C12.247 15.1397 15.8993 9.60632 15.8993 4.80729C15.8993 4.65137 15.8954 4.4939 15.8884 4.33798C16.5988 3.82423 17.2121 3.18804 17.6994 2.45922L17.7009 2.45688Z" fill="#00AEEF"/>
          </svg>
        </IconWrapper>
      </RightContent>
      <MenuBtn onClick={toggleMenu}>
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.00012207" y1="1.25" x2="17.3335" y2="1.25" stroke="white" strokeWidth="1.5"/>
          <line x1="0.00012207" y1="8.25" x2="17.3335" y2="8.25" stroke="white" strokeWidth="1.5"/>
          <line x1="0.00012207" y1="15.25" x2="17.3335" y2="15.25" stroke="white" strokeWidth="1.5"/>
        </svg>
      </MenuBtn>
    </HeaderWrapper>
  )
}

export default TopBar;