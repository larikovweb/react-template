import styled from '@emotion/styled';
import { FC } from 'react';
import { useLocation } from 'react-router';
import { css } from '@emotion/react';
import {
  CHAT_ROUTE,
  CREATE_ROUTE,
  EXPLORE_ROUTE,
  GALLERY_ROUTE,
  YOUR_AI_ROUTE,
} from '../../../utils';
import { Button } from '../../../components/form';
import { IconAI, IconChat, IconCreate, IconExplore, IconGallery } from '../../../components/icons';
import {
  $premiumEndColor,
  $premiumStartColor,
  $primaryEndColor,
  $primaryStartColor,
} from '../../../styled/helpers';
import { NavigateClick } from '../../../components/route';

const nav = [
  {
    name: 'Explore',
    link: EXPLORE_ROUTE,
  },
  {
    name: 'Chat',
    link: CHAT_ROUTE,
  },
  {
    name: 'Create Girl',
    link: CREATE_ROUTE,
  },
  {
    name: 'Your AI',
    link: YOUR_AI_ROUTE,
  },
  {
    name: 'Gallery',
    link: GALLERY_ROUTE,
  },
];

export const Nav: FC = () => {
  const pathName = useLocation().pathname;
  return (
    <Wrapper>
      {nav.map((item, i) => {
        const noBg = pathName !== item.link && i !== 2;
        const active = pathName === item.link && i !== 2;
        const premium = i === 2;

        return (
          <NavigateClick to={item.link} key={item.name}>
            <BtnWrap $premium={premium}>
              <Button noBg={noBg} borderPrimary={active} borderPremium={premium} fitContent>
                <DictNavIcon url={item.link} active={active} />
                {item.name}
              </Button>
            </BtnWrap>
          </NavigateClick>
        );
      })}
    </Wrapper>
  );
};

const DictNavIcon: FC<{ url: string; active: boolean }> = ({ url, active }) => {
  const activeColor = active ? [$primaryStartColor, $primaryEndColor] : ['#fff', '#fff'];

  switch (url) {
    case EXPLORE_ROUTE:
      return <IconExplore startColor={activeColor[0]} stopColor={activeColor[1]} />;
    case CHAT_ROUTE:
      return <IconChat startColor={activeColor[0]} stopColor={activeColor[1]} />;
    case CREATE_ROUTE:
      return <IconCreate startColor={$premiumStartColor} stopColor={$premiumEndColor} />;
    case YOUR_AI_ROUTE:
      return <IconAI startColor={activeColor[0]} stopColor={activeColor[1]} />;
    case GALLERY_ROUTE:
      return <IconGallery startColor={activeColor[0]} stopColor={activeColor[1]} />;
    default:
      return null;
  }
};

const Wrapper = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border-radius: 0.75rem;
  border: 0.0625rem solid #25293f;
  background: rgba(18, 20, 34, 0.5);
`;

const BtnWrap = styled.div<{ $premium?: boolean }>`
  ${({ $premium }) =>
    $premium &&
    css`
      order: 1;
    `}
`;
