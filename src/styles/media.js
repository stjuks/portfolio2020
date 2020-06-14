import { css } from 'styled-components';

let media = {
  xxl: 1440,
  xl: 1200,
  l: 1000,
  m: 768,
  s: 560,
  xs: 400,
  xxs: 320
};

media = Object.keys(media).reduce((acc, label) => {
  const emSize = media[label] / 16;
  acc[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
