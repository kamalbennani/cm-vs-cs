import styled, { css } from "styled-components";

import { theme } from "../theme";
import { borderProps, marginProps } from '../utils';

const buttonSize = ({ padding, fontSize, borderRadius, height }) => css`
  padding: ${padding};
  font-size: ${fontSize};
  border-radius: ${borderRadius};
  height: ${height};
`;

const buttonColor = ({ color, background, border }) => css`
  color: ${color};
  background-color: ${background};
  border-color: ${border};

  &:hover:not(.Button__disabled) {
    background-color: lighten(${background}, 2%);
  }

  &:active:not(.Button__disabled) {
    background-color: darken(${background}, 5%);
  }

  &:focus:not(.Button__disabled) {
    outline: 0;
    border-color: ${border};
    box-shadow: none;
  }
`;


export const Button = styled.button`
  ${borderProps}
  ${marginProps}
  ${buttonSize({ padding: theme.btnPaddingBase, fontSize: theme.fontSizeBase, borderRadius: theme.borderRadiusBase, height: theme.btnHeightBase })}
  ${buttonColor({ color: theme.btnDefaultColor, background: theme.btnDefaultBg.default, border: theme.btnDefaultBorder })}
  position: relative;
  display: inline-block;
  text-align: center;
  border-width: ${theme.borderWidthBase};
  border-style: ${theme.borderStyleBase};
  line-height: 1.43;
  transition: 0.2s all;
  outline-color: transparent;
  font-family: ${theme.fontFamilyBase};
  cursor: pointer;

  ${props => props.default && `
    &:hover {
      background-color: ${theme.btnDefaultBg.hover};
    }

    &:active {
      background-color: ${theme.btnDefaultBg.active};
    }
  `}

  ${props => props.success && buttonColor({ color: theme.btnPrimaryColor, background: theme.btnPrimaryBg, border: theme.btnPrimaryBg })}
  ${props => props.info && buttonColor({ color: theme.btnInfoColor, background: theme.btnInfoBg, border: theme.btnInfoBg })}
  ${props => props.warning && buttonColor({ color: theme.btnWarningColor, background: theme.btnWarningBg, border: theme.btnWarningBg })}
  ${props => props.danger && buttonColor({ color: theme.btnDangerColor, background: theme.btnDangerBg, border: theme.btnDangerBg })}
`;