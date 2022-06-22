import { StyleSheet } from 'react-native';
import { margin, marginSmall, marginXSmall, marginLarge } from './variables';

export const MarginStyles = StyleSheet.create({
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

export default MarginStyles;
