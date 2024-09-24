import { FC } from 'react';

export const ArrowIco: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.87494 2.89961L17.2999 11.2996C17.3999 11.3996 17.4709 11.5079 17.5129 11.6246C17.5549 11.7413 17.5756 11.8663 17.5749 11.9996C17.5749 12.1329 17.5543 12.2579 17.5129 12.3746C17.4716 12.4913 17.4006 12.5996 17.2999 12.6996L8.87494 21.1246C8.6416 21.3579 8.34994 21.4746 7.99994 21.4746C7.64994 21.4746 7.34994 21.3496 7.09994 21.0996C6.84994 20.8496 6.72494 20.5579 6.72494 20.2246C6.72494 19.8913 6.84994 19.5996 7.09994 19.3496L14.4499 11.9996L7.09994 4.64961C6.8666 4.41627 6.74994 4.12861 6.74994 3.78661C6.74994 3.44461 6.87494 3.14894 7.12494 2.89961C7.37494 2.64961 7.6666 2.52461 7.99994 2.52461C8.33327 2.52461 8.62494 2.64961 8.87494 2.89961Z" />
  </svg>
);

export const IconLoader: FC = () => (
  <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
    <circle cx="15" cy="15" r="15">
      <animate
        attributeName="r"
        from="15"
        to="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
      <animate
        attributeName="r"
        from="9"
        to="9"
        begin="0s"
        dur="0.8s"
        values="9;15;9"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="0.5"
        to="0.5"
        begin="0s"
        dur="0.8s"
        values=".5;1;.5"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="105" cy="15" r="15">
      <animate
        attributeName="r"
        from="15"
        to="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const IconClose: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.6451 4.36708C19.1718 3.89382 18.4073 3.89382 17.934 4.36708L12 10.289L6.06598 4.35495C5.59272 3.88168 4.82821 3.88168 4.35495 4.35495C3.88168 4.82821 3.88168 5.59272 4.35495 6.06598L10.289 12L4.35495 17.934C3.88168 18.4073 3.88168 19.1718 4.35495 19.6451C4.82821 20.1183 5.59272 20.1183 6.06598 19.6451L12 13.711L17.934 19.6451C18.4073 20.1183 19.1718 20.1183 19.6451 19.6451C20.1183 19.1718 20.1183 18.4073 19.6451 17.934L13.711 12L19.6451 6.06598C20.1062 5.60485 20.1062 4.82821 19.6451 4.36708Z"
      stroke="none"
    />
  </svg>
);
