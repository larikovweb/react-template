import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '@styled/com';
import { NavLink } from 'react-router-dom';
import { RoutePrefix } from '@utils/routes';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Container>
        <NavLink to={RoutePrefix.MAIN}>Main</NavLink>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header``;
