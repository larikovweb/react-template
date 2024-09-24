import { FC } from 'react';
import styled from '@emotion/styled';
import { $primaryColor } from '@styled/helpers/variables';
import { IconLoader } from '../icons';

export const Loader: FC = () => {
  return (
    <Wrapper>
      <IconLoader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 7.5rem;
  svg {
    fill: ${$primaryColor};
    stroke: ${$primaryColor};
  }
`;
