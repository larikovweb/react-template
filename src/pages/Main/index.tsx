import { HelmetHead } from '@components/seo';
import styled from '@emotion/styled';
import { Container } from '@styled/com';
import { FC } from 'react';

const Main: FC = () => {
  return (
    <>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
      <Wrapper>MAIN PAGE</Wrapper>
    </>
  );
};

const Wrapper = styled(Container)``;

export default Main;
