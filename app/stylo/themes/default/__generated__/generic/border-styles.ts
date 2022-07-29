/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.1.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { TVariable } from '../../../types/__generated__';
import TBorderStyle from '../../../types/__generated__/generic/border';

const getBorderStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TBorderStyle, ViewStyle | ImageStyle>>({
    Border: {
      borderColor: variables['Border.Color'].toString(),
      borderWidth: Number(variables['Border.Width']),
    },
    'Border.Style.Solid': {
      borderStyle: 'solid',
    },
    'Border.Style.Dotted': {
      borderStyle: 'dotted',
    },
    'Border.Style.Dashed': {
      borderStyle: 'dashed',
    },
    'Border.Top': {
      borderColor: variables['Border.Color'].toString(),
      borderStyle: 'solid',
      borderTopWidth: Number(variables['Border.Width']),
    },
    'Border.Right': {
      borderColor: variables['Border.Color'].toString(),
      borderRightWidth: Number(variables['Border.Width']),
      borderStyle: 'solid',
    },
    'Border.Bottom': {
      borderBottomWidth: Number(variables['Border.Width']),
      borderColor: variables['Border.Color'].toString(),
      borderStyle: 'solid',
    },
    'Border.Left': {
      borderColor: variables['Border.Color'].toString(),
      borderLeftWidth: Number(variables['Border.Width']),
      borderStyle: 'solid',
    },
    'Border.Radius': {
      borderRadius: Number(variables['Border.Radius']),
    },
    'Border.Radius.Small': {
      borderRadius: Number(variables['Border.Radius.Small']),
    },
    'Border.Radius.Large': {
      borderRadius: Number(variables['Border.Radius.Large']),
    },
    'Border.Radius.TopLeft': {
      borderTopLeftRadius: Number(variables['Border.Radius']),
    },
    'Border.Radius.TopRight': {
      borderTopRightRadius: Number(variables['Border.Radius']),
    },
    'Border.Radius.BottomLeft': {
      borderBottomLeftRadius: Number(variables['Border.Radius']),
    },
    'Border.Radius.BottomRight': {
      borderBottomRightRadius: Number(variables['Border.Radius']),
    },
    'Border.Radius.TopLeft.Small': {
      borderTopLeftRadius: Number(variables['Border.Radius.Small']),
    },
    'Border.Radius.TopLeft.Large': {
      borderTopLeftRadius: Number(variables['Border.Radius.Large']),
    },
    'Border.Radius.TopRight.Small': {
      borderTopRightRadius: Number(variables['Border.Radius.Small']),
    },
    'Border.Radius.TopRight.Large': {
      borderTopRightRadius: Number(variables['Border.Radius.Large']),
    },
    'Border.Radius.BottomLeft.Small': {
      borderBottomLeftRadius: Number(variables['Border.Radius.Small']),
    },
    'Border.Radius.BottomLeft.Large': {
      borderBottomLeftRadius: Number(variables['Border.Radius.Large']),
    },
    'Border.Radius.BottomRight.Small': {
      borderBottomRightRadius: Number(variables['Border.Radius.Small']),
    },
    'Border.Radius.BottomRight.Large': {
      borderBottomRightRadius: Number(variables['Border.Radius.Large']),
    },
    'Border.Color.Blue1': {
      borderColor: variables['Color.Blue1'].toString(),
    },
    'Border.Color.Blue2': {
      borderColor: variables['Color.Blue2'].toString(),
    },
    'Border.Color.Blue3': {
      borderColor: variables['Color.Blue3'].toString(),
    },
    'Border.Color.Blue4': {
      borderColor: variables['Color.Blue4'].toString(),
    },
    'Border.Color.Blue5': {
      borderColor: variables['Color.Blue5'].toString(),
    },
    'Border.Color.Blue6': {
      borderColor: variables['Color.Blue6'].toString(),
    },
    'Border.Color.Blue7': {
      borderColor: variables['Color.Blue7'].toString(),
    },
    'Border.Color.Blue8': {
      borderColor: variables['Color.Blue8'].toString(),
    },
    'Border.Color.Blue9': {
      borderColor: variables['Color.Blue9'].toString(),
    },
    'Border.Color.Blue10': {
      borderColor: variables['Color.Blue10'].toString(),
    },
    'Border.Color.Cyan1': {
      borderColor: variables['Color.Cyan1'].toString(),
    },
    'Border.Color.Cyan2': {
      borderColor: variables['Color.Cyan2'].toString(),
    },
    'Border.Color.Cyan3': {
      borderColor: variables['Color.Cyan3'].toString(),
    },
    'Border.Color.Cyan4': {
      borderColor: variables['Color.Cyan4'].toString(),
    },
    'Border.Color.Cyan5': {
      borderColor: variables['Color.Cyan5'].toString(),
    },
    'Border.Color.Cyan6': {
      borderColor: variables['Color.Cyan6'].toString(),
    },
    'Border.Color.Cyan7': {
      borderColor: variables['Color.Cyan7'].toString(),
    },
    'Border.Color.Cyan8': {
      borderColor: variables['Color.Cyan8'].toString(),
    },
    'Border.Color.Cyan9': {
      borderColor: variables['Color.Cyan9'].toString(),
    },
    'Border.Color.Cyan10': {
      borderColor: variables['Color.Cyan10'].toString(),
    },
    'Border.Color.Danger': {
      borderColor: variables['Color.Red5'].toString(),
    },
    'Border.Color.Danger1': {
      borderColor: variables['Color.Danger1'].toString(),
    },
    'Border.Color.Danger2': {
      borderColor: variables['Color.Danger2'].toString(),
    },
    'Border.Color.Danger3': {
      borderColor: variables['Color.Danger3'].toString(),
    },
    'Border.Color.Danger4': {
      borderColor: variables['Color.Danger4'].toString(),
    },
    'Border.Color.Danger5': {
      borderColor: variables['Color.Danger5'].toString(),
    },
    'Border.Color.Danger6': {
      borderColor: variables['Color.Danger6'].toString(),
    },
    'Border.Color.Danger7': {
      borderColor: variables['Color.Danger7'].toString(),
    },
    'Border.Color.Danger8': {
      borderColor: variables['Color.Danger8'].toString(),
    },
    'Border.Color.Danger9': {
      borderColor: variables['Color.Danger9'].toString(),
    },
    'Border.Color.Danger10': {
      borderColor: variables['Color.Danger10'].toString(),
    },
    'Border.Color.Green1': {
      borderColor: variables['Color.Green1'].toString(),
    },
    'Border.Color.Green2': {
      borderColor: variables['Color.Green2'].toString(),
    },
    'Border.Color.Green3': {
      borderColor: variables['Color.Green3'].toString(),
    },
    'Border.Color.Green4': {
      borderColor: variables['Color.Green4'].toString(),
    },
    'Border.Color.Green5': {
      borderColor: variables['Color.Green5'].toString(),
    },
    'Border.Color.Green6': {
      borderColor: variables['Color.Green6'].toString(),
    },
    'Border.Color.Green7': {
      borderColor: variables['Color.Green7'].toString(),
    },
    'Border.Color.Green8': {
      borderColor: variables['Color.Green8'].toString(),
    },
    'Border.Color.Green9': {
      borderColor: variables['Color.Green9'].toString(),
    },
    'Border.Color.Green10': {
      borderColor: variables['Color.Green10'].toString(),
    },
    'Border.Color.Grey1': {
      borderColor: variables['Color.Grey1'].toString(),
    },
    'Border.Color.Grey2': {
      borderColor: variables['Color.Grey2'].toString(),
    },
    'Border.Color.Grey3': {
      borderColor: variables['Color.Grey3'].toString(),
    },
    'Border.Color.Grey4': {
      borderColor: variables['Color.Grey4'].toString(),
    },
    'Border.Color.Grey5': {
      borderColor: variables['Color.Grey5'].toString(),
    },
    'Border.Color.Grey6': {
      borderColor: variables['Color.Grey6'].toString(),
    },
    'Border.Color.Grey7': {
      borderColor: variables['Color.Grey7'].toString(),
    },
    'Border.Color.Grey8': {
      borderColor: variables['Color.Grey8'].toString(),
    },
    'Border.Color.Grey9': {
      borderColor: variables['Color.Grey9'].toString(),
    },
    'Border.Color.Grey10': {
      borderColor: variables['Color.Grey10'].toString(),
    },
    'Border.Color.Info': {
      borderColor: variables['Color.Cyan5'].toString(),
    },
    'Border.Color.Info1': {
      borderColor: variables['Color.Info1'].toString(),
    },
    'Border.Color.Info2': {
      borderColor: variables['Color.Info2'].toString(),
    },
    'Border.Color.Info3': {
      borderColor: variables['Color.Info3'].toString(),
    },
    'Border.Color.Info4': {
      borderColor: variables['Color.Info4'].toString(),
    },
    'Border.Color.Info5': {
      borderColor: variables['Color.Info5'].toString(),
    },
    'Border.Color.Info6': {
      borderColor: variables['Color.Info6'].toString(),
    },
    'Border.Color.Info7': {
      borderColor: variables['Color.Info7'].toString(),
    },
    'Border.Color.Info8': {
      borderColor: variables['Color.Info8'].toString(),
    },
    'Border.Color.Info9': {
      borderColor: variables['Color.Info9'].toString(),
    },
    'Border.Color.Info10': {
      borderColor: variables['Color.Info10'].toString(),
    },
    'Border.Color.Magenta1': {
      borderColor: variables['Color.Magenta1'].toString(),
    },
    'Border.Color.Magenta2': {
      borderColor: variables['Color.Magenta2'].toString(),
    },
    'Border.Color.Magenta3': {
      borderColor: variables['Color.Magenta3'].toString(),
    },
    'Border.Color.Magenta4': {
      borderColor: variables['Color.Magenta4'].toString(),
    },
    'Border.Color.Magenta5': {
      borderColor: variables['Color.Magenta5'].toString(),
    },
    'Border.Color.Magenta6': {
      borderColor: variables['Color.Magenta6'].toString(),
    },
    'Border.Color.Magenta7': {
      borderColor: variables['Color.Magenta7'].toString(),
    },
    'Border.Color.Magenta8': {
      borderColor: variables['Color.Magenta8'].toString(),
    },
    'Border.Color.Magenta9': {
      borderColor: variables['Color.Magenta9'].toString(),
    },
    'Border.Color.Magenta10': {
      borderColor: variables['Color.Magenta10'].toString(),
    },
    'Border.Color.Orange1': {
      borderColor: variables['Color.Orange1'].toString(),
    },
    'Border.Color.Orange2': {
      borderColor: variables['Color.Orange2'].toString(),
    },
    'Border.Color.Orange3': {
      borderColor: variables['Color.Orange3'].toString(),
    },
    'Border.Color.Orange4': {
      borderColor: variables['Color.Orange4'].toString(),
    },
    'Border.Color.Orange5': {
      borderColor: variables['Color.Orange5'].toString(),
    },
    'Border.Color.Orange6': {
      borderColor: variables['Color.Orange6'].toString(),
    },
    'Border.Color.Orange7': {
      borderColor: variables['Color.Orange7'].toString(),
    },
    'Border.Color.Orange8': {
      borderColor: variables['Color.Orange8'].toString(),
    },
    'Border.Color.Orange9': {
      borderColor: variables['Color.Orange9'].toString(),
    },
    'Border.Color.Orange10': {
      borderColor: variables['Color.Orange10'].toString(),
    },
    'Border.Color.Primary': {
      borderColor: variables['Color.Primary'].toString(),
    },
    'Border.Color.Primary1': {
      borderColor: variables['Color.Primary1'].toString(),
    },
    'Border.Color.Primary2': {
      borderColor: variables['Color.Primary2'].toString(),
    },
    'Border.Color.Primary3': {
      borderColor: variables['Color.Primary3'].toString(),
    },
    'Border.Color.Primary4': {
      borderColor: variables['Color.Primary4'].toString(),
    },
    'Border.Color.Primary5': {
      borderColor: variables['Color.Primary5'].toString(),
    },
    'Border.Color.Primary6': {
      borderColor: variables['Color.Primary6'].toString(),
    },
    'Border.Color.Primary7': {
      borderColor: variables['Color.Primary7'].toString(),
    },
    'Border.Color.Primary8': {
      borderColor: variables['Color.Primary8'].toString(),
    },
    'Border.Color.Primary9': {
      borderColor: variables['Color.Primary9'].toString(),
    },
    'Border.Color.Primary10': {
      borderColor: variables['Color.Primary10'].toString(),
    },
    'Border.Color.Purple1': {
      borderColor: variables['Color.Purple1'].toString(),
    },
    'Border.Color.Purple2': {
      borderColor: variables['Color.Purple2'].toString(),
    },
    'Border.Color.Purple3': {
      borderColor: variables['Color.Purple3'].toString(),
    },
    'Border.Color.Purple4': {
      borderColor: variables['Color.Purple4'].toString(),
    },
    'Border.Color.Purple5': {
      borderColor: variables['Color.Purple5'].toString(),
    },
    'Border.Color.Purple6': {
      borderColor: variables['Color.Purple6'].toString(),
    },
    'Border.Color.Purple7': {
      borderColor: variables['Color.Purple7'].toString(),
    },
    'Border.Color.Purple8': {
      borderColor: variables['Color.Purple8'].toString(),
    },
    'Border.Color.Purple9': {
      borderColor: variables['Color.Purple9'].toString(),
    },
    'Border.Color.Purple10': {
      borderColor: variables['Color.Purple10'].toString(),
    },
    'Border.Color.Red1': {
      borderColor: variables['Color.Red1'].toString(),
    },
    'Border.Color.Red2': {
      borderColor: variables['Color.Red2'].toString(),
    },
    'Border.Color.Red3': {
      borderColor: variables['Color.Red3'].toString(),
    },
    'Border.Color.Red4': {
      borderColor: variables['Color.Red4'].toString(),
    },
    'Border.Color.Red5': {
      borderColor: variables['Color.Red5'].toString(),
    },
    'Border.Color.Red6': {
      borderColor: variables['Color.Red6'].toString(),
    },
    'Border.Color.Red7': {
      borderColor: variables['Color.Red7'].toString(),
    },
    'Border.Color.Red8': {
      borderColor: variables['Color.Red8'].toString(),
    },
    'Border.Color.Red9': {
      borderColor: variables['Color.Red9'].toString(),
    },
    'Border.Color.Red10': {
      borderColor: variables['Color.Red10'].toString(),
    },
    'Border.Color.Secondary': {
      borderColor: variables['Color.Grey6'].toString(),
    },
    'Border.Color.Success': {
      borderColor: variables['Color.Success'].toString(),
    },
    'Border.Color.Success1': {
      borderColor: variables['Color.Success1'].toString(),
    },
    'Border.Color.Success2': {
      borderColor: variables['Color.Success2'].toString(),
    },
    'Border.Color.Success3': {
      borderColor: variables['Color.Success3'].toString(),
    },
    'Border.Color.Success4': {
      borderColor: variables['Color.Success4'].toString(),
    },
    'Border.Color.Success5': {
      borderColor: variables['Color.Success5'].toString(),
    },
    'Border.Color.Success6': {
      borderColor: variables['Color.Success6'].toString(),
    },
    'Border.Color.Success7': {
      borderColor: variables['Color.Success7'].toString(),
    },
    'Border.Color.Success8': {
      borderColor: variables['Color.Success8'].toString(),
    },
    'Border.Color.Success9': {
      borderColor: variables['Color.Success9'].toString(),
    },
    'Border.Color.Success10': {
      borderColor: variables['Color.Success10'].toString(),
    },
    'Border.Color.Warning': {
      borderColor: variables['Color.Orange6'].toString(),
    },
    'Border.Color.Warning1': {
      borderColor: variables['Color.Warning1'].toString(),
    },
    'Border.Color.Warning2': {
      borderColor: variables['Color.Warning2'].toString(),
    },
    'Border.Color.Warning3': {
      borderColor: variables['Color.Warning3'].toString(),
    },
    'Border.Color.Warning4': {
      borderColor: variables['Color.Warning4'].toString(),
    },
    'Border.Color.Warning5': {
      borderColor: variables['Color.Warning5'].toString(),
    },
    'Border.Color.Warning6': {
      borderColor: variables['Color.Warning6'].toString(),
    },
    'Border.Color.Warning7': {
      borderColor: variables['Color.Warning7'].toString(),
    },
    'Border.Color.Warning8': {
      borderColor: variables['Color.Warning8'].toString(),
    },
    'Border.Color.Warning9': {
      borderColor: variables['Color.Warning9'].toString(),
    },
    'Border.Color.Warning10': {
      borderColor: variables['Color.Warning10'].toString(),
    },
    'Border.Color.White': {
      borderColor: variables['Color.White'].toString(),
    },
    'Border.Color.Yellow1': {
      borderColor: variables['Color.Yellow1'].toString(),
    },
    'Border.Color.Yellow2': {
      borderColor: variables['Color.Yellow2'].toString(),
    },
    'Border.Color.Yellow3': {
      borderColor: variables['Color.Yellow3'].toString(),
    },
    'Border.Color.Yellow4': {
      borderColor: variables['Color.Yellow4'].toString(),
    },
    'Border.Color.Yellow5': {
      borderColor: variables['Color.Yellow5'].toString(),
    },
    'Border.Color.Yellow6': {
      borderColor: variables['Color.Yellow6'].toString(),
    },
    'Border.Color.Yellow7': {
      borderColor: variables['Color.Yellow7'].toString(),
    },
    'Border.Color.Yellow8': {
      borderColor: variables['Color.Yellow8'].toString(),
    },
    'Border.Color.Yellow9': {
      borderColor: variables['Color.Yellow9'].toString(),
    },
    'Border.Color.Yellow10': {
      borderColor: variables['Color.Yellow10'].toString(),
    },
  })
);

export default getBorderStyles;
