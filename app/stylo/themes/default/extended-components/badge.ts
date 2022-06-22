import { StyleSheet } from 'react-native';

export const BadgeStyles = StyleSheet.create({
  Badge: {
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 40,
    height: 24,
    minWidth: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'Badge.Small': {
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 40,
    height: 20,
    minWidth: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'Badge.Large': {
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 40,
    height: 26,
    minWidth: 26,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const BadgeTextStyles = StyleSheet.create({
  'Badge.Text': {
    fontSize: 16,
    lineHeight: 18,
  },
  'Badge.Text.Small': {
    fontSize: 12,
    lineHeight: 14,
  },
  'Badge.Text.Large': {
    fontSize: 20,
    lineHeight: 22,
  },
});
