import { StyleSheet } from 'react-native';

const FlexStyles = StyleSheet.create({
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
});

export default FlexStyles;
