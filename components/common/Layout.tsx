import Head from 'next/head'
import { FC, ReactNode } from 'react';
import Footer from './Footer';
import TopBar from './TopBar';

interface IProps {
  title?: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@600&family=Teko:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <TopBar />
    {children}
    <Footer />
  </div>
)

export default Layout;