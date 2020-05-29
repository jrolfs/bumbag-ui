import { css, cssClass } from '../styled';
import { borderRadius, fontWeight, palette, space, theme } from '../utils';

export const TopNav = styleProps => cssClass`
  display: flex;
  justify-content: space-between;
  min-height: 60px;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TopNavSection = styleProps => cssClass`
  display: flex;

  &:not(:last-child) {
    margin-right: ${space(2, 'major')(styleProps)}rem;
  }

  &&&&& li {
    align-items: center;
    display: flex;
  }

  &&&&& > *:not(:last-child) {
    margin-right: ${space(1, 'minor')(styleProps)}rem;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const TopNavItem = styleProps => cssClass`
  align-items: center;
  color: inherit;
  height: 100%;
  font-weight: ${fontWeight('semibold')(styleProps)};
  text-decoration: none;

  &&&& {
    display: flex;
  }

  ${(styleProps.href || styleProps.onClick || styleProps.navId) &&
    css`
      cursor: pointer;
      padding: 0 0.8rem;
    `}

  ${styleProps.variant === 'default' &&
    css`
      min-height: 2.5rem;
    `}

  ${styleProps.variant === 'pill' &&
    css`
      border-radius: ${borderRadius('default')(styleProps)};
      height: 44px;
    `}

  ${styleProps.isActive &&
    css`
      color: ${palette(styleProps.palette, styleProps.palette)(styleProps)};
      fill: ${palette(styleProps.palette, styleProps.palette)(styleProps)};

      ${styleProps.variant === 'default' &&
        css`
          box-shadow: inset 0 -2px 0 0 ${palette(styleProps.palette, styleProps.palette)(styleProps)};
        `} & {
        ${theme(styleProps.themeKey, `css.active`)(styleProps)};
      }
    `}

  &:hover {
    ${styleProps.variant !== 'pill' &&
      css`
        color: ${palette(styleProps.palette, styleProps.palette)(styleProps)};
      `}

    ${styleProps.variant === 'pill' &&
      css`
        background-color: ${palette('white700')(styleProps)};
      `}

    & {
      ${theme(styleProps.themeKey, `css.hover`)(styleProps)};
    }
  }

  &:focus {
    outline: none;
    color: ${palette(styleProps.palette, styleProps.palette)(styleProps)};
    fill: ${palette(styleProps.palette, styleProps.palette)(styleProps)};

    ${styleProps.variant === 'default' &&
      css`
        box-shadow: inset 0 -2px 0 0 ${palette(styleProps.palette, styleProps.palette)(styleProps)};
      `}

    & {
      ${theme(styleProps.themeKey, `css.focus`)(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;