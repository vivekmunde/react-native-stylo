/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

const PaddingStyles = StyleSheet.create({
  Padding: {
    paddingTop: Variables.Padding,
    paddingRight: Variables.Padding,
    paddingBottom: Variables.Padding,
    paddingLeft: Variables.Padding,
  },
  'Padding.Top': {
    paddingTop: Variables.Padding,
  },
  'Padding.Right': {
    paddingRight: Variables.Padding,
  },
  'Padding.Bottom': {
    paddingBottom: Variables.Padding,
  },
  'Padding.Left': {
    paddingLeft: Variables.Padding,
  },
  'Padding.Mini': {
    paddingTop: Variables['Padding.Mini'],
    paddingRight: Variables['Padding.Mini'],
    paddingBottom: Variables['Padding.Mini'],
    paddingLeft: Variables['Padding.Mini'],
  },
  'Padding.Small': {
    paddingTop: Variables['Padding.Small'],
    paddingRight: Variables['Padding.Small'],
    paddingBottom: Variables['Padding.Small'],
    paddingLeft: Variables['Padding.Small'],
  },
  'Padding.Large': {
    paddingTop: Variables['Padding.Large'],
    paddingRight: Variables['Padding.Large'],
    paddingBottom: Variables['Padding.Large'],
    paddingLeft: Variables['Padding.Large'],
  },
  'Padding.Top.Mini': {
    paddingTop: Variables['Padding.Mini'],
  },
  'Padding.Right.Mini': {
    paddingRight: Variables['Padding.Mini'],
  },
  'Padding.Bottom.Mini': {
    paddingBottom: Variables['Padding.Mini'],
  },
  'Padding.Left.Mini': {
    paddingLeft: Variables['Padding.Mini'],
  },
  'Padding.Top.Small': {
    paddingTop: Variables['Padding.Small'],
  },
  'Padding.Right.Small': {
    paddingRight: Variables['Padding.Small'],
  },
  'Padding.Bottom.Small': {
    paddingBottom: Variables['Padding.Small'],
  },
  'Padding.Left.Small': {
    paddingLeft: Variables['Padding.Small'],
  },
  'Padding.Top.Large': {
    paddingTop: Variables['Padding.Large'],
  },
  'Padding.Right.Large': {
    paddingRight: Variables['Padding.Large'],
  },
  'Padding.Bottom.Large': {
    paddingBottom: Variables['Padding.Large'],
  },
  'Padding.Left.Large': {
    paddingLeft: Variables['Padding.Large'],
  },
});

export default PaddingStyles;
