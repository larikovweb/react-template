import { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../../components/form';

export const Buttons: FC = () => {
  return (
    <Wrapper>
      <Button borderPrimary>Log In</Button>
      <Button>Sign Up</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 6.625rem 6.625rem;
`;
