/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { TVariable } from '../../../types/__generated__';
import TMarginStyle from '../../../types/__generated__/generic/margin';

const getMarginStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TMarginStyle, ViewStyle | TextStyle | ImageStyle>>({
    Margin: {
      marginTop: variables.Margin,
      marginRight: variables.Margin,
      marginBottom: variables.Margin,
      marginLeft: variables.Margin,
    },
    'Margin.Top': {
      marginTop: variables.Margin,
    },
    'Margin.Right': {
      marginRight: variables.Margin,
    },
    'Margin.Bottom': {
      marginBottom: variables.Margin,
    },
    'Margin.Left': {
      marginLeft: variables.Margin,
    },
    'Margin.Mini': {
      marginTop: variables['Margin.Mini'],
      marginRight: variables['Margin.Mini'],
      marginBottom: variables['Margin.Mini'],
      marginLeft: variables['Margin.Mini'],
    },
    'Margin.Small': {
      marginTop: variables['Margin.Small'],
      marginRight: variables['Margin.Small'],
      marginBottom: variables['Margin.Small'],
      marginLeft: variables['Margin.Small'],
    },
    'Margin.Large': {
      marginTop: variables['Margin.Large'],
      marginRight: variables['Margin.Large'],
      marginBottom: variables['Margin.Large'],
      marginLeft: variables['Margin.Large'],
    },
    'Margin.Top.Mini': {
      marginTop: variables['Margin.Mini'],
    },
    'Margin.Right.Mini': {
      marginRight: variables['Margin.Mini'],
    },
    'Margin.Bottom.Mini': {
      marginBottom: variables['Margin.Mini'],
    },
    'Margin.Left.Mini': {
      marginLeft: variables['Margin.Mini'],
    },
    'Margin.Top.Small': {
      marginTop: variables['Margin.Small'],
    },
    'Margin.Right.Small': {
      marginRight: variables['Margin.Small'],
    },
    'Margin.Bottom.Small': {
      marginBottom: variables['Margin.Small'],
    },
    'Margin.Left.Small': {
      marginLeft: variables['Margin.Small'],
    },
    'Margin.Top.Large': {
      marginTop: variables['Margin.Large'],
    },
    'Margin.Right.Large': {
      marginRight: variables['Margin.Large'],
    },
    'Margin.Bottom.Large': {
      marginBottom: variables['Margin.Large'],
    },
    'Margin.Left.Large': {
      marginLeft: variables['Margin.Large'],
    },
  })
);

export default getMarginStyles;
