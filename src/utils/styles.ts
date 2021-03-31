export const XL_DESKTOP_WIDTH = 1200;
export const LARGE_DESKTOP_WIDTH = 1024;
export const DESKTOP_WIDTH = 992;
export const TABLET_WIDTH = 768;
export const PHONE_WIDTH = 576;

export const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(DESKTOP_WIDTH),
  tablet: customMediaQuery(TABLET_WIDTH),
  phone: customMediaQuery(PHONE_WIDTH),
};
