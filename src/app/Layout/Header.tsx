import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Container>HEADER</Container>
    </Wrapper>
  );
};

const Wrapper = styled.header``;
