/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TPaddingStyle, TVariable } from '../../../types/__generated__';

const getPaddingStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TPaddingStyle, ViewStyle | TextStyle>>({
    Padding: {
      paddingTop: variables.Padding,
      paddingRight: variables.Padding,
      paddingBottom: variables.Padding,
      paddingLeft: variables.Padding,
    },
    'Padding.Top': {
      paddingTop: variables.Padding,
    },
    'Padding.Right': {
      paddingRight: variables.Padding,
    },
    'Padding.Bottom': {
      paddingBottom: variables.Padding,
    },
    'Padding.Left': {
      paddingLeft: variables.Padding,
    },
    'Padding.Mini': {
      paddingTop: variables['Padding.Mini'],
      paddingRight: variables['Padding.Mini'],
      paddingBottom: variables['Padding.Mini'],
      paddingLeft: variables['Padding.Mini'],
    },
    'Padding.Small': {
      paddingTop: variables['Padding.Small'],
      paddingRight: variables['Padding.Small'],
      paddingBottom: variables['Padding.Small'],
      paddingLeft: variables['Padding.Small'],
    },
    'Padding.Large': {
      paddingTop: variables['Padding.Large'],
      paddingRight: variables['Padding.Large'],
      paddingBottom: variables['Padding.Large'],
      paddingLeft: variables['Padding.Large'],
    },
    'Padding.Top.Mini': {
      paddingTop: variables['Padding.Mini'],
    },
    'Padding.Right.Mini': {
      paddingRight: variables['Padding.Mini'],
    },
    'Padding.Bottom.Mini': {
      paddingBottom: variables['Padding.Mini'],
    },
    'Padding.Left.Mini': {
      paddingLeft: variables['Padding.Mini'],
    },
    'Padding.Top.Small': {
      paddingTop: variables['Padding.Small'],
    },
    'Padding.Right.Small': {
      paddingRight: variables['Padding.Small'],
    },
    'Padding.Bottom.Small': {
      paddingBottom: variables['Padding.Small'],
    },
    'Padding.Left.Small': {
      paddingLeft: variables['Padding.Small'],
    },
    'Padding.Top.Large': {
      paddingTop: variables['Padding.Large'],
    },
    'Padding.Right.Large': {
      paddingRight: variables['Padding.Large'],
    },
    'Padding.Bottom.Large': {
      paddingBottom: variables['Padding.Large'],
    },
    'Padding.Left.Large': {
      paddingLeft: variables['Padding.Large'],
    },
  })
);

export default getPaddingStyles;
