import { css } from '@emotion/react';
import { $phoneWidth } from '@styled/helpers';

export const typographyVar = {
  H1: css`
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.625rem;
    @media screen and (max-width: ${$phoneWidth}) {
      font-size: 2rem;
      line-height: 100%;
    }
  `,
  H2: css`
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem;
    @media screen and (max-width: ${$phoneWidth}) {
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: 0.045rem;
    }
  `,
  H3: css`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.045rem;
    @media screen and (max-width: ${$phoneWidth}) {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  `,
  P1: css`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.03rem;
  `,
  P2: css`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.02625rem;
  `,
  P3: css`
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0225rem;
  `,
  P4: css`
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.75rem;
    letter-spacing: 0.01875rem;
  `,
};
