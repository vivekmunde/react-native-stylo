import { StyleSheet } from 'react-native';

import Colors from './colors';
import { ButtonIconStyles } from './extended-components/button';
import { TagIconStyles } from './extended-components/tag';
import FontColorStyles from './font-color-styles';
import { margin, marginLarge, marginSmall, marginXSmall } from './variables';

const IconStyles = StyleSheet.create({
  ...FontColorStyles,
  Default: {
    color: Colors.Font,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  Bold: {
    fontWeight: '600',
  },
  Small: {
    fontSize: 12,
    lineHeight: 18,
  },
  Large: {
    fontSize: 20,
    lineHeight: 28,
  },
  Margin: {
    margin,
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
  ...ButtonIconStyles,
  ...TagIconStyles,
});

export default IconStyles;
