/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.4.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

export const MarginStyles = StyleSheet.create({
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
  'Margin.Mini': {
    margin: Variables['Margin.Mini'],
  },
  'Margin.Small': {
    margin: Variables['Margin.Small'],
  },
  'Margin.Large': {
    margin: Variables['Margin.Large'],
  },
  'Margin.Top.Mini': {
    marginTop: Variables['Margin.Mini'],
  },
  'Margin.Right.Mini': {
    marginRight: Variables['Margin.Mini'],
  },
  'Margin.Bottom.Mini': {
    marginBottom: Variables['Margin.Mini'],
  },
  'Margin.Left.Mini': {
    marginLeft: Variables['Margin.Mini'],
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

export default MarginStyles;
