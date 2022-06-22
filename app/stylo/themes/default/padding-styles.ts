import { StyleSheet } from 'react-native';
import {
  padding,
  paddingSmall,
  paddingXSmall,
  paddingLarge,
} from './variables';

const PaddingStyles = StyleSheet.create({
  Padding: {
    padding,
  },
  'Padding.Top': {
    paddingTop: padding,
  },
  'Padding.Right': {
    paddingRight: padding,
  },
  'Padding.Bottom': {
    paddingBottom: padding,
  },
  'Padding.Left': {
    paddingLeft: padding,
  },
  'Padding.XSmall': {
    padding: paddingXSmall,
  },
  'Padding.Small': {
    padding: paddingSmall,
  },
  'Padding.Large': {
    padding: paddingLarge,
  },
  'Padding.Top.XSmall': {
    paddingTop: paddingXSmall,
  },
  'Padding.Right.XSmall': {
    paddingRight: paddingXSmall,
  },
  'Padding.Bottom.XSmall': {
    paddingBottom: paddingXSmall,
  },
  'Padding.Left.XSmall': {
    paddingLeft: paddingXSmall,
  },
  'Padding.Top.Small': {
    paddingTop: paddingSmall,
  },
  'Padding.Right.Small': {
    paddingRight: paddingSmall,
  },
  'Padding.Bottom.Small': {
    paddingBottom: paddingSmall,
  },
  'Padding.Left.Small': {
    paddingLeft: paddingSmall,
  },
  'Padding.Top.Large': {
    paddingTop: paddingLarge,
  },
  'Padding.Right.Large': {
    paddingRight: paddingLarge,
  },
  'Padding.Bottom.Large': {
    paddingBottom: paddingLarge,
  },
  'Padding.Left.Large': {
    paddingLeft: paddingLarge,
  },
});

export default PaddingStyles;
