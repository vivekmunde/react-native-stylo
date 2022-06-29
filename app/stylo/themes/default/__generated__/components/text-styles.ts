import { StyleSheet } from 'react-native';

import Variables from '../../variables';
import { BadgeTextStyles } from '../assorted/badge-styles';
import { ButtonTextStyles } from '../assorted/button-styles';
import { TagTextStyles } from '../assorted/tag-styles';
import FontColorStyles from '../generic/font-color-styles';

const fontSize = Number(Variables['Font.Size'] ?? 16);
const fontSizeSmall = Number(Variables['Font.Size.Small'] ?? 12);
const fontSizeLarge = Number(Variables['Font.Size.Large'] ?? 24);
const fontWeight = Variables['Font.Weight'];
const fontWeightBold = Variables['Font.Weight.Bold'];

const h4FontSize = fontSize + 4;
const h3FontSize = h4FontSize + 4;
const h2FontSize = h3FontSize + 6;
const h1FontSize = h2FontSize + 8;

export const TextCStyles = StyleSheet.create({
  Default: {
    color: Variables['Font.Color'],
    fontSize,
    lineHeight: fontSize + 8,
    fontWeight:
      fontWeight === '100'
        ? '100'
        : fontWeight === '200'
        ? '200'
        : fontWeight === '300'
        ? '300'
        : fontWeight === '400'
        ? '400'
        : fontWeight === '500'
        ? '500'
        : fontWeight === '600'
        ? '600'
        : fontWeight === '700'
        ? '700'
        : fontWeight === '800'
        ? '800'
        : fontWeight === '900'
        ? '900'
        : 'normal',
  },
  Bold: {
    fontWeight:
      fontWeightBold === '100'
        ? '100'
        : fontWeightBold === '200'
        ? '200'
        : fontWeightBold === '300'
        ? '300'
        : fontWeightBold === '400'
        ? '400'
        : fontWeightBold === '500'
        ? '500'
        : fontWeightBold === '600'
        ? '600'
        : fontWeightBold === '700'
        ? '700'
        : fontWeightBold === '800'
        ? '800'
        : fontWeightBold === '900'
        ? '900'
        : 'bold',
  },
  H1: {
    fontSize: h1FontSize,
    lineHeight: h1FontSize + 8,
    marginBottom: Variables.Margin,
  },
  H2: {
    fontSize: h2FontSize,
    lineHeight: h2FontSize + 8,
    marginBottom: Variables.Margin,
  },
  H3: {
    fontSize: h3FontSize,
    lineHeight: h3FontSize + 8,
    marginBottom: Variables.Margin * (3 / 4),
  },
  H4: {
    fontSize: h4FontSize,
    lineHeight: h4FontSize + 8,
    marginBottom: Variables.Margin * (3 / 4),
  },
  Small: {
    fontSize: fontSizeSmall,
    lineHeight: fontSizeSmall + 8,
  },
  Large: {
    fontSize: fontSizeLarge,
    lineHeight: fontSizeLarge + 8,
  },
  Paragraph: {
    marginBottom: Variables.Margin,
    width: '100%',
  },
  Margin: {
    margin: Variables.Margin,
  },
  'Margin.Top': {
    marginTop: Variables.Margin,
  },
  'Margin.Right': {
    marginRight: Variables.Margin,
  },
  'Margin.Bottom': {
    marginBottom: Variables.Margin,
  },
  'Margin.Left': {
    marginLeft: Variables.Margin,
  },
  'Margin.XSmall': {
    margin: Variables['Margin.XSmall'],
  },
  'Margin.Small': {
    margin: Variables['Margin.Small'],
  },
  'Margin.Large': {
    margin: Variables['Margin.Large'],
  },
  'Margin.Top.XSmall': {
    marginTop: Variables['Margin.XSmall'],
  },
  'Margin.Right.XSmall': {
    marginRight: Variables['Margin.XSmall'],
  },
  'Margin.Bottom.XSmall': {
    marginBottom: Variables['Margin.XSmall'],
  },
  'Margin.Left.XSmall': {
    marginLeft: Variables['Margin.XSmall'],
  },
  'Margin.Top.Small': {
    marginTop: Variables['Margin.Small'],
  },
  'Margin.Right.Small': {
    marginRight: Variables['Margin.Small'],
  },
  'Margin.Bottom.Small': {
    marginBottom: Variables['Margin.Small'],
  },
  'Margin.Left.Small': {
    marginLeft: Variables['Margin.Small'],
  },
  'Margin.Top.Large': {
    marginTop: Variables['Margin.Large'],
  },
  'Margin.Right.Large': {
    marginRight: Variables['Margin.Large'],
  },
  'Margin.Bottom.Large': {
    marginBottom: Variables['Margin.Large'],
  },
  'Margin.Left.Large': {
    marginLeft: Variables['Margin.Large'],
  },
  'Align.Center': {
    textAlign: 'center',
  },
  'Align.Right': {
    textAlign: 'right',
  },
});

const TextStyles = StyleSheet.create({
  ...FontColorStyles,
  ...BadgeTextStyles,
  ...ButtonTextStyles,
  ...TagTextStyles,
  ...TextCStyles,
});

export default TextStyles;
