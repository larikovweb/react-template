import styled from '@emotion/styled';
import { type FC } from 'react';
import { Container } from '../../styled/com/Container';
import { HelmetHead } from '../../components/seo/HelmetHead';

const Chat: FC = () => {
  return (
    <>
      <HelmetHead title="Заголовок О нас" descr="Описание О нас" />
      <Wrapper>Chat PAGE</Wrapper>
    </>
  );
};

const Wrapper = styled(Container)``;

export default Chat;
