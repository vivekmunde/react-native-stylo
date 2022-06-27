import { StyleSheet } from 'react-native';

import Colors from '../colors';
import { BadgeTextStyles } from '../assorted/badge';
import { ButtonTextStyles } from '../assorted/button';
import { TagTextStyles } from '../assorted/tag';
import FontColorStyles from '../generic/font-color-styles';
import Variables from '../variables';

export const CommonTextStyles = StyleSheet.create({
  ...FontColorStyles,
  Bold: {
    fontWeight: '600',
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
    color: Colors['Color.Font'],
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
