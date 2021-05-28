import Head from 'next/head'
import { FC, ReactNode } from 'react';
import TopBar from './TopBar';

interface IProps {
  title?: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title, children }) => (
  <div>
     <style jsx global>{`
        body {
          margin: 0;
        }
        * {
          font-family: 'Mulish';
        }
    `}
    </style>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
    </Head>
    <TopBar />
    {children}
  </div>
)

export default Layout;