import { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import { removeNotification } from '@redux/slice/notificationsSlice';
import { useAppDispatch } from '@redux/store';

import {
  $errorColor,
  $infoColor,
  $phoneWidth,
  $successColor,
  $white100,
  fadeIn,
} from '@styled/helpers';

import { TNotificationType } from '@interfaces/notification';
import { IconClose } from '../icons';

const NotifyDict: Record<TNotificationType, { label: string }> = {
  success: {
    label: 'SUCCESS',
  },
  error: {
    label: 'WARNING',
  },
  info: {
    label: 'NOTIFICATION',
  },
};

type NotificationProps = {
  id: string;
  message: string;
  type: TNotificationType;
};

export const Notification: FC<NotificationProps> = (props) => {
  const { id, message, type } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeNotification(id));
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, dispatch]);

  return (
    <Wrapper $type={type}>
      <Text>
        <b>{NotifyDict[type].label}</b>
        <span>{message}</span>
      </Text>
      <Close onClick={() => dispatch(removeNotification(id))}>
        <IconClose />
      </Close>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $type: TNotificationType }>`
  display: grid;
  align-content: center;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  position: relative;
  padding: 0.75rem 1.5rem;
  max-width: 38.875rem;
  border-radius: 1.5rem;
  background: rgba(10, 12, 25, 0.9);
  animation: ${fadeIn} 0.5s;

  ${({ $type }) => {
    switch ($type) {
      case 'success':
        return `
            border: 0.0625rem solid ${$successColor};
            b {
                color: ${$successColor};
            }
        `;
      case 'error':
        return `
            border: 0.0625rem solid ${$errorColor};
            b {
                color: ${$errorColor};
            }
        `;
      case 'info':
        return `
            border: 0.0625rem solid ${$infoColor};
            b {
                color: ${$infoColor};
            }
        `;
    }
  }}
  b {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.175rem;
    text-transform: uppercase;
  }
  span {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  @media screen and (max-width: ${$phoneWidth}) {
    width: 100%;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Close = styled.div`
  position: absolute;
  top: 0rem;
  right: -0.25rem;
  transform: translateX(100%);
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.5;
  }
  svg {
    fill: ${$white100};
    stroke: ${$white100};
    width: 1.5rem;
    height: 1.5rem;
  }
`;
