import { StyleSheet } from 'react-native';

import { ButtonIconStyles } from '../assorted/button';
import { TagIconStyles } from '../assorted/tag';
import Colors from '../colors';
import FontColorStyles from '../generic/font-color-styles';
import Variables from '../variables';

const IconStyles = StyleSheet.create({
  ...FontColorStyles,
  Default: {
    color: Colors['Color.Font'],
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
    margin: Variables.Margin,
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
  ...ButtonIconStyles,
  ...TagIconStyles,
});

export default IconStyles;
