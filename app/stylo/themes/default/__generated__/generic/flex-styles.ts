/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import TFlexStyle from '../../../types/__generated__/generic/flex';

const getFlexStyles = () => (
  StyleSheet.create<Record<TFlexStyle, ViewStyle>>({
    'Flex.Column': {
      display: 'flex',
      flexDirection: 'column',
    },
    'Flex.Row': {
      display: 'flex',
      flexDirection: 'row',
    },
    'Flex.Wrap': {
      flexWrap: 'wrap',
    },
    'Flex.AlignContent.End': {
      alignContent: 'flex-end',
    },
    'Flex.AlignContent.Start': {
      alignContent: 'flex-start',
    },
    'Flex.AlignContent.Center': {
      alignContent: 'center',
    },
    'Flex.AlignContent.SpaceAround': {
      alignContent: 'space-around',
    },
    'Flex.AlignContent.SpaceBetween': {
      alignContent: 'space-between',
    },
    'Flex.AlignContent.Stretch': {
      alignContent: 'stretch',
    },
    'Flex.AlignItems.Start': {
      alignItems: 'flex-start',
    },
    'Flex.AlignItems.Center': {
      alignItems: 'center',
    },
    'Flex.AlignItems.End': {
      alignItems: 'flex-end',
    },
    'Flex.AlignItems.Stretch': {
      alignItems: 'stretch',
    },
    'Flex.JustifyContent.Start': {
      justifyContent: 'flex-start',
    },
    'Flex.JustifyContent.Center': {
      justifyContent: 'center',
    },
    'Flex.JustifyContent.End': {
      justifyContent: 'flex-end',
    },
    'Flex.JustifyContent.SpaceAround': {
      justifyContent: 'space-around',
    },
    'Flex.JustifyContent.SpaceBetween': {
      justifyContent: 'space-between',
    },
    'Flex.JustifyContent.SpaceEvenly': {
      justifyContent: 'space-evenly',
    },
    'Flex.1': {
      flex: 1,
    },
    'Flex.2': {
      flex: 2,
    },
    'Flex.3': {
      flex: 3,
    },
    'Flex.4': {
      flex: 4,
    },
    'Flex.5': {
      flex: 5,
    },
    'Flex.6': {
      flex: 6,
    },
    'Flex.7': {
      flex: 7,
    },
    'Flex.8': {
      flex: 8,
    },
    'Flex.9': {
      flex: 9,
    },
    'Flex.10': {
      flex: 10,
    },
  })
);

export default getFlexStyles;
