import { colors } from './colors';

const shadow = {
  // Shadow
  shadow1Up              : `0 -1px 6px ${colors.shadowColor}`,
  shadow1Down            : `0 1px 6px ${colors.shadowColor}`,
  shadow1Left            : `-1px 0 6px ${colors.shadowColor}`,
  shadow1Right           : `1px 0 6px ${colors.shadowColor}`,
  shadow2                 : `0 2px 8px ${colors.shadowColor}`,
}

const border = {
  // Border color
  borderWidthBase        : '1px',
  borderColorBase        : '#8c8fa2',
  borderStyleBase        : 'solid',
  borderRadiusBase       : '2px',
};

export const theme = {

  'textColor'               : '#10101F',
  'fontSizeBase'           : '14px',
  'fontSizeSm'             : '12px',
  'fontSizeLg'             : '16px',
  'fontFamilyBase'         : 'Open Sans',

  // Borders
  ...border,

  // Shadow
  ...shadow,
  boxShadowBase          : shadow.shadow1Down,

  // Button
  btnPrimaryColor        : colors.white.default,
  btnPrimaryBg           : colors.green.default,

  btnDisabledColor       : '#768093',
  btnDisabledBg          : '#F5F6F8',

  btnInfoBg              : colors.blue.default,
  btnWarningBg           : colors.yellow.default,
  btnDangerBg            : colors.red.default,

  btnDefaultColor        : colors.textColor,
  btnDefaultBg           : {
    default: colors.white.default,
    hover     : colors.white.hover,
    active    : colors.white.hover,
  },
  btnDefaultBorder       : border.borderColorBase,

  btnPaddingBase         : '0 10px',
  btnBorderRadius        : '15px',
  btnRoundedPaddingBase : '0 15px',

  btnHeightBase          : '34px',
  btnHeightLg            : '38px',
  btnHeightSm            : '28px',

  outlineBase             : colors.blue.default,

  dropdownPaddingBase    : '7px 15px',
}