import { type FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import {
  $nudeColor,
  $nudeStartColor,
  $premiumColor,
  $premiumStartColor,
  $primaryColor,
  $primaryStartColor,
} from '../../styled/helpers';
import { IconLoader } from '../icons';

type Props = {
  children: React.ReactNode;
  pending?: boolean;
  disabled?: boolean;
  borderPrimary?: boolean;
  borderPremium?: boolean;
  borderNude?: boolean;
  noBg?: boolean;

  medium?: boolean;
  big?: boolean;
  fitContent?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = (props) => {
  const {
    children,
    disabled,
    pending,
    borderPrimary,
    borderPremium,
    borderNude,
    noBg,
    big,
    medium,
    fitContent,
    ...rest
  } = props;
  return (
    <Wrapper
      $disabled={disabled}
      $pending={pending}
      $borderPremium={borderPremium}
      $borderPrimary={borderPrimary}
      $borderNude={borderNude}
      $noBg={noBg}
      $medium={medium}
      $big={big}
      $fitContent={fitContent}
      {...rest}>
      <Content>{children}</Content>
      {pending && <IconLoader />}
    </Wrapper>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1.5rem;
  gap: 0.5rem;
  transition: color 0.3s, background 0.3s, opacity 0.3s;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Wrapper = styled.button<{
  $disabled?: boolean;
  $pending?: boolean;
  $borderPremium?: boolean;
  $borderPrimary?: boolean;
  $borderNude?: boolean;
  $noBg?: boolean;
  $big?: boolean;
  $medium?: boolean;
  $fitContent?: boolean;
}>`
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  cursor: pointer;
  position: relative;
  color: #ffffff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  border: 0.0625rem solid transparent;
  border-radius: 0.5rem;
  width: ${({ $fitContent }) => ($fitContent ? 'fit-content' : '100%')};
  height: 3rem;
  background: ${$primaryColor};
  transition: opacity 0.3s, background 0.3s, border 0.3s, box-shadow 0.3s;

  &:hover {
    opacity: 0.75;
  }

  > *:not(:last-child) {
    opacity: ${({ $pending }) => ($pending ? 0 : 1)};
    transition: opacity 0.3s;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5rem;
  }

  ${({ $borderPrimary }) =>
    $borderPrimary &&
    css`
      border: 0.0625rem solid ${$primaryStartColor};
      background: #121422;
      box-shadow: 0 0.5rem 1.5rem 0 rgba(117, 145, 247, 0.15);
      > div {
        background: ${$primaryColor};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}

  ${({ $borderPremium }) =>
    $borderPremium &&
    css`
      border: 0.0625rem solid ${$premiumStartColor};
      background: linear-gradient(180deg, rgba(255, 226, 89, 0.1) 0%, rgba(255, 167, 81, 0.1) 100%);
      box-shadow: 0 0.5rem 1.5rem 0 rgba(255, 210, 87, 0.15);
      > div {
        background: ${$premiumColor};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}
  
    ${({ $borderNude }) =>
    $borderNude &&
    css`
      border: 0.0625rem solid ${$nudeStartColor};
      background: linear-gradient(90deg, rgba(200, 78, 137, 0.1) 0%, rgba(241, 95, 121, 0.1) 100%);
      box-shadow: 0 0.5rem 1.5rem 0 rgba(221, 87, 129, 0.15);
      > div {
        background: ${$nudeColor};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}

    ${({ $noBg }) =>
    $noBg &&
    css`
      background: transparent;
      box-shadow: none;
      > div {
        color: #fff;
        opacity: 0.5;
      }
      &:hover {
        background-color: #1b1e2f;
        > div {
          opacity: 1;
        }
      }
    `}

  ${({ $big }) =>
    $big &&
    css`
      height: 4.5rem;
    `}

    ${({ $medium }) =>
    $medium &&
    css`
      height: 4rem;
    `}
`;
