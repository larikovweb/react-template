import { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IconLogo } from '../../../components/icons';
import { $primaryColor } from '../../../styled/helpers';
import { MAIN_ROUTE } from '../../../utils';

export const Logo: FC = () => {
  return (
    <Wrapper to={MAIN_ROUTE}>
      <Icon>
        <IconLogo />
      </Icon>
      <span>Wife</span>
      .online
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  text-shadow: 0 0.5rem 1.5rem rgba(117, 145, 247, 0.15);

  span {
    background: ${$primaryColor};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  b {
    color: #fff;
  }
`;

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 0.75rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;
