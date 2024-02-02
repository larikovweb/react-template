import styled from '@emotion/styled';
import { Suspense, type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetHead } from '../../components/seo/HelmetHead';
import { ScrollTop } from '../../components/route';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC = () => {
  return (
    <>
      <HelmetHead title="Общий заголовок" descr="Общее описание" />
      <Header />
      <Main>
        <Suspense fallback={<ScrollTop />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  display: block;
`;
