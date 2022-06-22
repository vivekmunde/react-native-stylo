import { StyleSheet } from 'react-native';

import Colors from './colors';
import { BadgeTextStyles } from './extended-components/badge';
import { ButtonTextStyles } from './extended-components/button';
import { TagTextStyles } from './extended-components/tag';
import FontColorStyles from './font-color-styles';
import { margin, marginLarge, marginSmall, marginXSmall } from './variables';

export const CommonTextStyles = StyleSheet.create({
  ...FontColorStyles,
  Bold: {
    fontWeight: '600',
  },
  Margin: {
    margin,
  },
  'Margin.Top': {
    marginTop: margin,
  },
  'Margin.Right': {
    marginRight: margin,
  },
  'Margin.Bottom': {
    marginBottom: margin,
  },
  'Margin.Left': {
    marginLeft: margin,
  },
  'Margin.XSmall': {
    margin: marginXSmall,
  },
  'Margin.Small': {
    margin: marginSmall,
  },
  'Margin.Large': {
    margin: marginLarge,
  },
  'Margin.Top.XSmall': {
    marginTop: marginXSmall,
  },
  'Margin.Right.XSmall': {
    marginRight: marginXSmall,
  },
  'Margin.Bottom.XSmall': {
    marginBottom: marginXSmall,
  },
  'Margin.Left.XSmall': {
    marginLeft: marginXSmall,
  },
  'Margin.Top.Small': {
    marginTop: marginSmall,
  },
  'Margin.Right.Small': {
    marginRight: marginSmall,
  },
  'Margin.Bottom.Small': {
    marginBottom: marginSmall,
  },
  'Margin.Left.Small': {
    marginLeft: marginSmall,
  },
  'Margin.Top.Large': {
    marginTop: marginLarge,
  },
  'Margin.Right.Large': {
    marginRight: marginLarge,
  },
  'Margin.Bottom.Large': {
    marginBottom: marginLarge,
  },
  'Margin.Left.Large': {
    marginLeft: marginLarge,
  },
});

const TextStyles = StyleSheet.create({
  ...CommonTextStyles,
  'Align.Center': {
    textAlign: 'center',
  },
  'Align.Right': {
    textAlign: 'right',
  },
  Default: {
    color: Colors.Font,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  H1: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    marginBottom: 16,
  },
  H2: {
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
    marginBottom: 16,
  },
  H3: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    marginBottom: 8,
  },
  H4: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    marginBottom: 8,
  },
  Small: {
    fontSize: 12,
    lineHeight: 18,
  },
  Large: {
    fontSize: 20,
    lineHeight: 28,
  },
  Paragraph: {
    marginBottom: 16,
    width: '100%',
  },
  ...BadgeTextStyles,
  ...ButtonTextStyles,
  ...TagTextStyles,
});

export default TextStyles;
