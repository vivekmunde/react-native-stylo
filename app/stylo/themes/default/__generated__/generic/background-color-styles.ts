/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 1.0.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet, ViewStyle } from 'react-native';
import { TVariable } from '../../../types/__generated__';
import TBackgroundColorStyle from '../../../types/__generated__/generic/background-color';

const getBackgroundColorStyles = (variables: Record<TVariable, string | number>) => (
  StyleSheet.create<Record<TBackgroundColorStyle, ViewStyle>>({
    'BackgroundColor.Transparent': {
      backgroundColor: 'transparent',
    },
    'BackgroundColor.Screen': {
      backgroundColor: variables['Screen.BackgroundColor'].toString(),
    },
    'BackgroundColor.Alpha1': {
      backgroundColor: variables['Color.Alpha1'].toString(),
    },
    'BackgroundColor.Alpha2': {
      backgroundColor: variables['Color.Alpha2'].toString(),
    },
    'BackgroundColor.Alpha3': {
      backgroundColor: variables['Color.Alpha3'].toString(),
    },
    'BackgroundColor.Alpha4': {
      backgroundColor: variables['Color.Alpha4'].toString(),
    },
    'BackgroundColor.Alpha5': {
      backgroundColor: variables['Color.Alpha5'].toString(),
    },
    'BackgroundColor.Alpha6': {
      backgroundColor: variables['Color.Alpha6'].toString(),
    },
    'BackgroundColor.Alpha7': {
      backgroundColor: variables['Color.Alpha7'].toString(),
    },
    'BackgroundColor.Alpha8': {
      backgroundColor: variables['Color.Alpha8'].toString(),
    },
    'BackgroundColor.Alpha9': {
      backgroundColor: variables['Color.Alpha9'].toString(),
    },
    'BackgroundColor.Alpha10': {
      backgroundColor: variables['Color.Alpha10'].toString(),
    },
    'BackgroundColor.AlphaInverted1': {
      backgroundColor: variables['Color.AlphaInverted1'].toString(),
    },
    'BackgroundColor.AlphaInverted2': {
      backgroundColor: variables['Color.AlphaInverted2'].toString(),
    },
    'BackgroundColor.AlphaInverted3': {
      backgroundColor: variables['Color.AlphaInverted3'].toString(),
    },
    'BackgroundColor.AlphaInverted4': {
      backgroundColor: variables['Color.AlphaInverted4'].toString(),
    },
    'BackgroundColor.AlphaInverted5': {
      backgroundColor: variables['Color.AlphaInverted5'].toString(),
    },
    'BackgroundColor.AlphaInverted6': {
      backgroundColor: variables['Color.AlphaInverted6'].toString(),
    },
    'BackgroundColor.AlphaInverted7': {
      backgroundColor: variables['Color.AlphaInverted7'].toString(),
    },
    'BackgroundColor.AlphaInverted8': {
      backgroundColor: variables['Color.AlphaInverted8'].toString(),
    },
    'BackgroundColor.AlphaInverted9': {
      backgroundColor: variables['Color.AlphaInverted9'].toString(),
    },
    'BackgroundColor.AlphaInverted10': {
      backgroundColor: variables['Color.AlphaInverted10'].toString(),
    },
    'BackgroundColor.Backdrop': {
      backgroundColor: variables['Screen.BackdropColor'].toString(),
    },
    'BackgroundColor.Blue1': {
      backgroundColor: variables['Color.Blue1'].toString(),
    },
    'BackgroundColor.Blue2': {
      backgroundColor: variables['Color.Blue2'].toString(),
    },
    'BackgroundColor.Blue3': {
      backgroundColor: variables['Color.Blue3'].toString(),
    },
    'BackgroundColor.Blue4': {
      backgroundColor: variables['Color.Blue4'].toString(),
    },
    'BackgroundColor.Blue5': {
      backgroundColor: variables['Color.Blue5'].toString(),
    },
    'BackgroundColor.Blue6': {
      backgroundColor: variables['Color.Blue6'].toString(),
    },
    'BackgroundColor.Blue7': {
      backgroundColor: variables['Color.Blue7'].toString(),
    },
    'BackgroundColor.Blue8': {
      backgroundColor: variables['Color.Blue8'].toString(),
    },
    'BackgroundColor.Blue9': {
      backgroundColor: variables['Color.Blue9'].toString(),
    },
    'BackgroundColor.Blue10': {
      backgroundColor: variables['Color.Blue10'].toString(),
    },
    'BackgroundColor.Cyan1': {
      backgroundColor: variables['Color.Cyan1'].toString(),
    },
    'BackgroundColor.Cyan2': {
      backgroundColor: variables['Color.Cyan2'].toString(),
    },
    'BackgroundColor.Cyan3': {
      backgroundColor: variables['Color.Cyan3'].toString(),
    },
    'BackgroundColor.Cyan4': {
      backgroundColor: variables['Color.Cyan4'].toString(),
    },
    'BackgroundColor.Cyan5': {
      backgroundColor: variables['Color.Cyan5'].toString(),
    },
    'BackgroundColor.Cyan6': {
      backgroundColor: variables['Color.Cyan6'].toString(),
    },
    'BackgroundColor.Cyan7': {
      backgroundColor: variables['Color.Cyan7'].toString(),
    },
    'BackgroundColor.Cyan8': {
      backgroundColor: variables['Color.Cyan8'].toString(),
    },
    'BackgroundColor.Cyan9': {
      backgroundColor: variables['Color.Cyan9'].toString(),
    },
    'BackgroundColor.Cyan10': {
      backgroundColor: variables['Color.Cyan10'].toString(),
    },
    'BackgroundColor.Danger': {
      backgroundColor: variables['Color.Danger'].toString(),
    },
    'BackgroundColor.Danger1': {
      backgroundColor: variables['Color.Danger1'].toString(),
    },
    'BackgroundColor.Danger2': {
      backgroundColor: variables['Color.Danger2'].toString(),
    },
    'BackgroundColor.Danger3': {
      backgroundColor: variables['Color.Danger3'].toString(),
    },
    'BackgroundColor.Danger4': {
      backgroundColor: variables['Color.Danger4'].toString(),
    },
    'BackgroundColor.Danger5': {
      backgroundColor: variables['Color.Danger5'].toString(),
    },
    'BackgroundColor.Danger6': {
      backgroundColor: variables['Color.Danger6'].toString(),
    },
    'BackgroundColor.Danger7': {
      backgroundColor: variables['Color.Danger7'].toString(),
    },
    'BackgroundColor.Danger8': {
      backgroundColor: variables['Color.Danger8'].toString(),
    },
    'BackgroundColor.Danger9': {
      backgroundColor: variables['Color.Danger9'].toString(),
    },
    'BackgroundColor.Danger10': {
      backgroundColor: variables['Color.Danger10'].toString(),
    },
    'BackgroundColor.Green1': {
      backgroundColor: variables['Color.Green1'].toString(),
    },
    'BackgroundColor.Green2': {
      backgroundColor: variables['Color.Green2'].toString(),
    },
    'BackgroundColor.Green3': {
      backgroundColor: variables['Color.Green3'].toString(),
    },
    'BackgroundColor.Green4': {
      backgroundColor: variables['Color.Green4'].toString(),
    },
    'BackgroundColor.Green5': {
      backgroundColor: variables['Color.Green5'].toString(),
    },
    'BackgroundColor.Green6': {
      backgroundColor: variables['Color.Green6'].toString(),
    },
    'BackgroundColor.Green7': {
      backgroundColor: variables['Color.Green7'].toString(),
    },
    'BackgroundColor.Green8': {
      backgroundColor: variables['Color.Green8'].toString(),
    },
    'BackgroundColor.Green9': {
      backgroundColor: variables['Color.Green9'].toString(),
    },
    'BackgroundColor.Green10': {
      backgroundColor: variables['Color.Green10'].toString(),
    },
    'BackgroundColor.Grey1': {
      backgroundColor: variables['Color.Grey1'].toString(),
    },
    'BackgroundColor.Grey2': {
      backgroundColor: variables['Color.Grey2'].toString(),
    },
    'BackgroundColor.Grey3': {
      backgroundColor: variables['Color.Grey3'].toString(),
    },
    'BackgroundColor.Grey4': {
      backgroundColor: variables['Color.Grey4'].toString(),
    },
    'BackgroundColor.Grey5': {
      backgroundColor: variables['Color.Grey5'].toString(),
    },
    'BackgroundColor.Grey6': {
      backgroundColor: variables['Color.Grey6'].toString(),
    },
    'BackgroundColor.Grey7': {
      backgroundColor: variables['Color.Grey7'].toString(),
    },
    'BackgroundColor.Grey8': {
      backgroundColor: variables['Color.Grey8'].toString(),
    },
    'BackgroundColor.Grey9': {
      backgroundColor: variables['Color.Grey9'].toString(),
    },
    'BackgroundColor.Grey10': {
      backgroundColor: variables['Color.Grey10'].toString(),
    },
    'BackgroundColor.Info': {
      backgroundColor: variables['Color.Info'].toString(),
    },
    'BackgroundColor.Info1': {
      backgroundColor: variables['Color.Info1'].toString(),
    },
    'BackgroundColor.Info2': {
      backgroundColor: variables['Color.Info2'].toString(),
    },
    'BackgroundColor.Info3': {
      backgroundColor: variables['Color.Info3'].toString(),
    },
    'BackgroundColor.Info4': {
      backgroundColor: variables['Color.Info4'].toString(),
    },
    'BackgroundColor.Info5': {
      backgroundColor: variables['Color.Info5'].toString(),
    },
    'BackgroundColor.Info6': {
      backgroundColor: variables['Color.Info6'].toString(),
    },
    'BackgroundColor.Info7': {
      backgroundColor: variables['Color.Info7'].toString(),
    },
    'BackgroundColor.Info8': {
      backgroundColor: variables['Color.Info8'].toString(),
    },
    'BackgroundColor.Info9': {
      backgroundColor: variables['Color.Info9'].toString(),
    },
    'BackgroundColor.Info10': {
      backgroundColor: variables['Color.Info10'].toString(),
    },
    'BackgroundColor.Magenta1': {
      backgroundColor: variables['Color.Magenta1'].toString(),
    },
    'BackgroundColor.Magenta2': {
      backgroundColor: variables['Color.Magenta2'].toString(),
    },
    'BackgroundColor.Magenta3': {
      backgroundColor: variables['Color.Magenta3'].toString(),
    },
    'BackgroundColor.Magenta4': {
      backgroundColor: variables['Color.Magenta4'].toString(),
    },
    'BackgroundColor.Magenta5': {
      backgroundColor: variables['Color.Magenta5'].toString(),
    },
    'BackgroundColor.Magenta6': {
      backgroundColor: variables['Color.Magenta6'].toString(),
    },
    'BackgroundColor.Magenta7': {
      backgroundColor: variables['Color.Magenta7'].toString(),
    },
    'BackgroundColor.Magenta8': {
      backgroundColor: variables['Color.Magenta8'].toString(),
    },
    'BackgroundColor.Magenta9': {
      backgroundColor: variables['Color.Magenta9'].toString(),
    },
    'BackgroundColor.Magenta10': {
      backgroundColor: variables['Color.Magenta10'].toString(),
    },
    'BackgroundColor.Orange1': {
      backgroundColor: variables['Color.Orange1'].toString(),
    },
    'BackgroundColor.Orange2': {
      backgroundColor: variables['Color.Orange2'].toString(),
    },
    'BackgroundColor.Orange3': {
      backgroundColor: variables['Color.Orange3'].toString(),
    },
    'BackgroundColor.Orange4': {
      backgroundColor: variables['Color.Orange4'].toString(),
    },
    'BackgroundColor.Orange5': {
      backgroundColor: variables['Color.Orange5'].toString(),
    },
    'BackgroundColor.Orange6': {
      backgroundColor: variables['Color.Orange6'].toString(),
    },
    'BackgroundColor.Orange7': {
      backgroundColor: variables['Color.Orange7'].toString(),
    },
    'BackgroundColor.Orange8': {
      backgroundColor: variables['Color.Orange8'].toString(),
    },
    'BackgroundColor.Orange9': {
      backgroundColor: variables['Color.Orange9'].toString(),
    },
    'BackgroundColor.Orange10': {
      backgroundColor: variables['Color.Orange10'].toString(),
    },
    'BackgroundColor.Primary': {
      backgroundColor: variables['Color.Primary'].toString(),
    },
    'BackgroundColor.Primary1': {
      backgroundColor: variables['Color.Primary1'].toString(),
    },
    'BackgroundColor.Primary2': {
      backgroundColor: variables['Color.Primary2'].toString(),
    },
    'BackgroundColor.Primary3': {
      backgroundColor: variables['Color.Primary3'].toString(),
    },
    'BackgroundColor.Primary4': {
      backgroundColor: variables['Color.Primary4'].toString(),
    },
    'BackgroundColor.Primary5': {
      backgroundColor: variables['Color.Primary5'].toString(),
    },
    'BackgroundColor.Primary6': {
      backgroundColor: variables['Color.Primary6'].toString(),
    },
    'BackgroundColor.Primary7': {
      backgroundColor: variables['Color.Primary7'].toString(),
    },
    'BackgroundColor.Primary8': {
      backgroundColor: variables['Color.Primary8'].toString(),
    },
    'BackgroundColor.Primary9': {
      backgroundColor: variables['Color.Primary9'].toString(),
    },
    'BackgroundColor.Primary10': {
      backgroundColor: variables['Color.Primary10'].toString(),
    },
    'BackgroundColor.Purple1': {
      backgroundColor: variables['Color.Purple1'].toString(),
    },
    'BackgroundColor.Purple2': {
      backgroundColor: variables['Color.Purple2'].toString(),
    },
    'BackgroundColor.Purple3': {
      backgroundColor: variables['Color.Purple3'].toString(),
    },
    'BackgroundColor.Purple4': {
      backgroundColor: variables['Color.Purple4'].toString(),
    },
    'BackgroundColor.Purple5': {
      backgroundColor: variables['Color.Purple5'].toString(),
    },
    'BackgroundColor.Purple6': {
      backgroundColor: variables['Color.Purple6'].toString(),
    },
    'BackgroundColor.Purple7': {
      backgroundColor: variables['Color.Purple7'].toString(),
    },
    'BackgroundColor.Purple8': {
      backgroundColor: variables['Color.Purple8'].toString(),
    },
    'BackgroundColor.Purple9': {
      backgroundColor: variables['Color.Purple9'].toString(),
    },
    'BackgroundColor.Purple10': {
      backgroundColor: variables['Color.Purple10'].toString(),
    },
    'BackgroundColor.Red1': {
      backgroundColor: variables['Color.Red1'].toString(),
    },
    'BackgroundColor.Red2': {
      backgroundColor: variables['Color.Red2'].toString(),
    },
    'BackgroundColor.Red3': {
      backgroundColor: variables['Color.Red3'].toString(),
    },
    'BackgroundColor.Red4': {
      backgroundColor: variables['Color.Red4'].toString(),
    },
    'BackgroundColor.Red5': {
      backgroundColor: variables['Color.Red5'].toString(),
    },
    'BackgroundColor.Red6': {
      backgroundColor: variables['Color.Red6'].toString(),
    },
    'BackgroundColor.Red7': {
      backgroundColor: variables['Color.Red7'].toString(),
    },
    'BackgroundColor.Red8': {
      backgroundColor: variables['Color.Red8'].toString(),
    },
    'BackgroundColor.Red9': {
      backgroundColor: variables['Color.Red9'].toString(),
    },
    'BackgroundColor.Red10': {
      backgroundColor: variables['Color.Red10'].toString(),
    },
    'BackgroundColor.Secondary': {
      backgroundColor: variables['Color.Secondary'].toString(),
    },
    'BackgroundColor.Success': {
      backgroundColor: variables['Color.Success'].toString(),
    },
    'BackgroundColor.Success1': {
      backgroundColor: variables['Color.Success1'].toString(),
    },
    'BackgroundColor.Success2': {
      backgroundColor: variables['Color.Success2'].toString(),
    },
    'BackgroundColor.Success3': {
      backgroundColor: variables['Color.Success3'].toString(),
    },
    'BackgroundColor.Success4': {
      backgroundColor: variables['Color.Success4'].toString(),
    },
    'BackgroundColor.Success5': {
      backgroundColor: variables['Color.Success5'].toString(),
    },
    'BackgroundColor.Success6': {
      backgroundColor: variables['Color.Success6'].toString(),
    },
    'BackgroundColor.Success7': {
      backgroundColor: variables['Color.Success7'].toString(),
    },
    'BackgroundColor.Success8': {
      backgroundColor: variables['Color.Success8'].toString(),
    },
    'BackgroundColor.Success9': {
      backgroundColor: variables['Color.Success9'].toString(),
    },
    'BackgroundColor.Success10': {
      backgroundColor: variables['Color.Success10'].toString(),
    },
    'BackgroundColor.Warning': {
      backgroundColor: variables['Color.Warning'].toString(),
    },
    'BackgroundColor.Warning1': {
      backgroundColor: variables['Color.Warning1'].toString(),
    },
    'BackgroundColor.Warning2': {
      backgroundColor: variables['Color.Warning2'].toString(),
    },
    'BackgroundColor.Warning3': {
      backgroundColor: variables['Color.Warning3'].toString(),
    },
    'BackgroundColor.Warning4': {
      backgroundColor: variables['Color.Warning4'].toString(),
    },
    'BackgroundColor.Warning5': {
      backgroundColor: variables['Color.Warning5'].toString(),
    },
    'BackgroundColor.Warning6': {
      backgroundColor: variables['Color.Warning6'].toString(),
    },
    'BackgroundColor.Warning7': {
      backgroundColor: variables['Color.Warning7'].toString(),
    },
    'BackgroundColor.Warning8': {
      backgroundColor: variables['Color.Warning8'].toString(),
    },
    'BackgroundColor.Warning9': {
      backgroundColor: variables['Color.Warning9'].toString(),
    },
    'BackgroundColor.Warning10': {
      backgroundColor: variables['Color.Warning10'].toString(),
    },
    'BackgroundColor.White': {
      backgroundColor: variables['Color.White'].toString(),
    },
    'BackgroundColor.Yellow1': {
      backgroundColor: variables['Color.Yellow1'].toString(),
    },
    'BackgroundColor.Yellow2': {
      backgroundColor: variables['Color.Yellow2'].toString(),
    },
    'BackgroundColor.Yellow3': {
      backgroundColor: variables['Color.Yellow3'].toString(),
    },
    'BackgroundColor.Yellow4': {
      backgroundColor: variables['Color.Yellow4'].toString(),
    },
    'BackgroundColor.Yellow5': {
      backgroundColor: variables['Color.Yellow5'].toString(),
    },
    'BackgroundColor.Yellow6': {
      backgroundColor: variables['Color.Yellow6'].toString(),
    },
    'BackgroundColor.Yellow7': {
      backgroundColor: variables['Color.Yellow7'].toString(),
    },
    'BackgroundColor.Yellow8': {
      backgroundColor: variables['Color.Yellow8'].toString(),
    },
    'BackgroundColor.Yellow9': {
      backgroundColor: variables['Color.Yellow9'].toString(),
    },
    'BackgroundColor.Yellow10': {
      backgroundColor: variables['Color.Yellow10'].toString(),
    },
  })
);

export default getBackgroundColorStyles;
