import styled from '@emotion/styled';
import { type FC } from 'react';
import { Container } from '../../../styled/com/Container';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { Buttons } from './Buttons';
export const Header: FC = () => {
  return (
    <Wrapper>
      <MyContainer>
        <Logo />
        <Nav />
        <Buttons />
      </MyContainer>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
`;

const MyContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;
