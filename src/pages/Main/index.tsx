import styled from '@emotion/styled';
import { type FC } from 'react';
import { HelmetHead } from '../../components/seo/HelmetHead';
import { Container } from '../../styled/com';
import { Button } from '../../components/form';
import { IconProfile } from '../../components/icons';

const Main: FC = () => {
  return (
    <>
      <HelmetHead title="Заголовок Главной" descr="Описание Главной" />
      <Wrapper>
        <Button>
          <IconProfile startColor="#fff" endColor="#fff" id="1" /> Button
        </Button>
        <Button borderPrimary>
          <IconProfile startColor="#000" endColor="#000" id="2" /> Button
        </Button>
        <Button borderPremium>
          <IconProfile /> Button
        </Button>
        <Button borderNude>
          <IconProfile /> Button
        </Button>
        <Button noBg>
          <IconProfile /> Button
        </Button>
        {/* <Button borderPremium>
          <IconProfile /> Button
        </Button>
        <Button borderPremium>
          <IconProfile /> Button
        </Button>
        <Button borderPremium>
          <IconProfile /> Button
        </Button> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Container)`
  max-width: 20rem;
`;

export default Main;
