// mixins
export const rem = (pixels: number, context = 16): string => {
  if (pixels) {
    pixels * 1;
  }
  if (context) {
    context * 1;
  }

  return `${(pixels / context) * 1}rem`;
};

export const calcFluidFontSize = (
  f_min: number,
  f_max: number,
  v_min: number,
  v_max: number,
): string => {
  const k = (f_max - f_min) / (v_max - v_min);
  let b = f_min - k * v_min;

  b = b * 1;

  return `calc(${`${k * 100}vw + ${b}px`})`;
};

export const fontFace = (
  $font_family: string,
  $file_path: string,
  $weight: number | string = 'normal',
  $style = 'normal',
) => {
  const name = $file_path.split('/').pop();
  const nameLocal = name?.split('-').join(' ');
  const path = $file_path.split('.')[0];

  return `@font-face {
    font-family: ${$font_family};
    src: url('${path}.eot');
    src: local('${name}'), local('${nameLocal}'),
      url('${path}.eot?#iefix') format('embedded-opentype'),
      url('${path}.woff') format('woff'), url('${path}.woff2') format('woff2'),
      url('${path}.svg') format('svg'), url('${path}.ttf') format('ttf'),
      url('${path}.ttf') format('truetype');
    font-weight: ${$weight};
    font-style: ${$style};
    font-display: swap;
  }`;
};
