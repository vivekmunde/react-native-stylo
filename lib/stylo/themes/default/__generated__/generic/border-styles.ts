/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/*                                  Version 0.3.0                                   */
/* -------------------------------------------------------------------------------- */
/*                                  DO NOT MODIFY                                   */
/* -------------------------------------------------------------------------------- */

import { StyleSheet } from 'react-native';

import Variables from '../../variables';

const BorderStyles = StyleSheet.create({
  Border: {
    borderColor: Variables['Border.Color'],
    borderStyle: 'solid',
    borderWidth: Variables['Border.Width'],
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
    borderColor: Variables['Border.Color'],
    borderStyle: 'solid',
    borderTopWidth: Variables['Border.Width'],
  },
  'Border.Right': {
    borderColor: Variables['Border.Color'],
    borderRightWidth: Variables['Border.Width'],
    borderStyle: 'solid',
  },
  'Border.Bottom': {
    borderBottomWidth: Variables['Border.Width'],
    borderColor: Variables['Border.Color'],
    borderStyle: 'solid',
  },
  'Border.Left': {
    borderColor: Variables['Border.Color'],
    borderLeftWidth: Variables['Border.Width'],
    borderStyle: 'solid',
  },
  'Border.Radius': {
    borderRadius: Variables['Border.Radius'],
  },
  'Border.Radius.Small': {
    borderRadius: Variables['Border.Radius.Small'],
  },
  'Border.Radius.Large': {
    borderRadius: Variables['Border.Radius.Large'],
  },
  'Border.Radius.TopLeft': {
    borderTopLeftRadius: Variables['Border.Radius'],
  },
  'Border.Radius.TopRight': {
    borderTopRightRadius: Variables['Border.Radius'],
  },
  'Border.Radius.BottomLeft': {
    borderBottomLeftRadius: Variables['Border.Radius'],
  },
  'Border.Radius.BottomRight': {
    borderBottomRightRadius: Variables['Border.Radius'],
  },
  'Border.Radius.TopLeft.Small': {
    borderTopLeftRadius: Variables['Border.Radius.Small'],
  },
  'Border.Radius.TopLeft.Large': {
    borderTopLeftRadius: Variables['Border.Radius.Large'],
  },
  'Border.Radius.TopRight.Small': {
    borderTopRightRadius: Variables['Border.Radius.Small'],
  },
  'Border.Radius.TopRight.Large': {
    borderTopRightRadius: Variables['Border.Radius.Large'],
  },
  'Border.Radius.BottomLeft.Small': {
    borderBottomLeftRadius: Variables['Border.Radius.Small'],
  },
  'Border.Radius.BottomLeft.Large': {
    borderBottomLeftRadius: Variables['Border.Radius.Large'],
  },
  'Border.Radius.BottomRight.Small': {
    borderBottomRightRadius: Variables['Border.Radius.Small'],
  },
  'Border.Radius.BottomRight.Large': {
    borderBottomRightRadius: Variables['Border.Radius.Large'],
  },
  'Border.Color.Blue1': {
    borderColor: Variables['Color.Blue1'],
  },
  'Border.Color.Blue2': {
    borderColor: Variables['Color.Blue2'],
  },
  'Border.Color.Blue3': {
    borderColor: Variables['Color.Blue3'],
  },
  'Border.Color.Blue4': {
    borderColor: Variables['Color.Blue4'],
  },
  'Border.Color.Blue5': {
    borderColor: Variables['Color.Blue5'],
  },
  'Border.Color.Blue6': {
    borderColor: Variables['Color.Blue6'],
  },
  'Border.Color.Blue7': {
    borderColor: Variables['Color.Blue7'],
  },
  'Border.Color.Blue8': {
    borderColor: Variables['Color.Blue8'],
  },
  'Border.Color.Blue9': {
    borderColor: Variables['Color.Blue9'],
  },
  'Border.Color.Blue10': {
    borderColor: Variables['Color.Blue10'],
  },
  'Border.Color.Cyan1': {
    borderColor: Variables['Color.Cyan1'],
  },
  'Border.Color.Cyan2': {
    borderColor: Variables['Color.Cyan2'],
  },
  'Border.Color.Cyan3': {
    borderColor: Variables['Color.Cyan3'],
  },
  'Border.Color.Cyan4': {
    borderColor: Variables['Color.Cyan4'],
  },
  'Border.Color.Cyan5': {
    borderColor: Variables['Color.Cyan5'],
  },
  'Border.Color.Cyan6': {
    borderColor: Variables['Color.Cyan6'],
  },
  'Border.Color.Cyan7': {
    borderColor: Variables['Color.Cyan7'],
  },
  'Border.Color.Cyan8': {
    borderColor: Variables['Color.Cyan8'],
  },
  'Border.Color.Cyan9': {
    borderColor: Variables['Color.Cyan9'],
  },
  'Border.Color.Cyan10': {
    borderColor: Variables['Color.Cyan10'],
  },
  'Border.Color.Danger': {
    borderColor: Variables['Color.Red5'],
  },
  'Border.Color.Danger1': {
    borderColor: Variables['Color.Danger1'],
  },
  'Border.Color.Danger2': {
    borderColor: Variables['Color.Danger2'],
  },
  'Border.Color.Danger3': {
    borderColor: Variables['Color.Danger3'],
  },
  'Border.Color.Danger4': {
    borderColor: Variables['Color.Danger4'],
  },
  'Border.Color.Danger5': {
    borderColor: Variables['Color.Danger5'],
  },
  'Border.Color.Danger6': {
    borderColor: Variables['Color.Danger6'],
  },
  'Border.Color.Danger7': {
    borderColor: Variables['Color.Danger7'],
  },
  'Border.Color.Danger8': {
    borderColor: Variables['Color.Danger8'],
  },
  'Border.Color.Danger9': {
    borderColor: Variables['Color.Danger9'],
  },
  'Border.Color.Danger10': {
    borderColor: Variables['Color.Danger10'],
  },
  'Border.Color.Gold1': {
    borderColor: Variables['Color.Gold1'],
  },
  'Border.Color.Gold2': {
    borderColor: Variables['Color.Gold2'],
  },
  'Border.Color.Gold3': {
    borderColor: Variables['Color.Gold3'],
  },
  'Border.Color.Gold4': {
    borderColor: Variables['Color.Gold4'],
  },
  'Border.Color.Gold5': {
    borderColor: Variables['Color.Gold5'],
  },
  'Border.Color.Gold6': {
    borderColor: Variables['Color.Gold6'],
  },
  'Border.Color.Gold7': {
    borderColor: Variables['Color.Gold7'],
  },
  'Border.Color.Gold8': {
    borderColor: Variables['Color.Gold8'],
  },
  'Border.Color.Gold9': {
    borderColor: Variables['Color.Gold9'],
  },
  'Border.Color.Gold10': {
    borderColor: Variables['Color.Gold10'],
  },
  'Border.Color.Green1': {
    borderColor: Variables['Color.Green1'],
  },
  'Border.Color.Green2': {
    borderColor: Variables['Color.Green2'],
  },
  'Border.Color.Green3': {
    borderColor: Variables['Color.Green3'],
  },
  'Border.Color.Green4': {
    borderColor: Variables['Color.Green4'],
  },
  'Border.Color.Green5': {
    borderColor: Variables['Color.Green5'],
  },
  'Border.Color.Green6': {
    borderColor: Variables['Color.Green6'],
  },
  'Border.Color.Green7': {
    borderColor: Variables['Color.Green7'],
  },
  'Border.Color.Green8': {
    borderColor: Variables['Color.Green8'],
  },
  'Border.Color.Green9': {
    borderColor: Variables['Color.Green9'],
  },
  'Border.Color.Green10': {
    borderColor: Variables['Color.Green10'],
  },
  'Border.Color.Grey1': {
    borderColor: Variables['Color.Grey1'],
  },
  'Border.Color.Grey2': {
    borderColor: Variables['Color.Grey2'],
  },
  'Border.Color.Grey3': {
    borderColor: Variables['Color.Grey3'],
  },
  'Border.Color.Grey4': {
    borderColor: Variables['Color.Grey4'],
  },
  'Border.Color.Grey5': {
    borderColor: Variables['Color.Grey5'],
  },
  'Border.Color.Grey6': {
    borderColor: Variables['Color.Grey6'],
  },
  'Border.Color.Grey7': {
    borderColor: Variables['Color.Grey7'],
  },
  'Border.Color.Grey8': {
    borderColor: Variables['Color.Grey8'],
  },
  'Border.Color.Grey9': {
    borderColor: Variables['Color.Grey9'],
  },
  'Border.Color.Grey10': {
    borderColor: Variables['Color.Grey10'],
  },
  'Border.Color.Info': {
    borderColor: Variables['Color.Cyan5'],
  },
  'Border.Color.Info1': {
    borderColor: Variables['Color.Info1'],
  },
  'Border.Color.Info2': {
    borderColor: Variables['Color.Info2'],
  },
  'Border.Color.Info3': {
    borderColor: Variables['Color.Info3'],
  },
  'Border.Color.Info4': {
    borderColor: Variables['Color.Info4'],
  },
  'Border.Color.Info5': {
    borderColor: Variables['Color.Info5'],
  },
  'Border.Color.Info6': {
    borderColor: Variables['Color.Info6'],
  },
  'Border.Color.Info7': {
    borderColor: Variables['Color.Info7'],
  },
  'Border.Color.Info8': {
    borderColor: Variables['Color.Info8'],
  },
  'Border.Color.Info9': {
    borderColor: Variables['Color.Info9'],
  },
  'Border.Color.Info10': {
    borderColor: Variables['Color.Info10'],
  },
  'Border.Color.Lime1': {
    borderColor: Variables['Color.Lime1'],
  },
  'Border.Color.Lime2': {
    borderColor: Variables['Color.Lime2'],
  },
  'Border.Color.Lime3': {
    borderColor: Variables['Color.Lime3'],
  },
  'Border.Color.Lime4': {
    borderColor: Variables['Color.Lime4'],
  },
  'Border.Color.Lime5': {
    borderColor: Variables['Color.Lime5'],
  },
  'Border.Color.Lime6': {
    borderColor: Variables['Color.Lime6'],
  },
  'Border.Color.Lime7': {
    borderColor: Variables['Color.Lime7'],
  },
  'Border.Color.Lime8': {
    borderColor: Variables['Color.Lime8'],
  },
  'Border.Color.Lime9': {
    borderColor: Variables['Color.Lime9'],
  },
  'Border.Color.Lime10': {
    borderColor: Variables['Color.Lime10'],
  },
  'Border.Color.Magenta1': {
    borderColor: Variables['Color.Magenta1'],
  },
  'Border.Color.Magenta2': {
    borderColor: Variables['Color.Magenta2'],
  },
  'Border.Color.Magenta3': {
    borderColor: Variables['Color.Magenta3'],
  },
  'Border.Color.Magenta4': {
    borderColor: Variables['Color.Magenta4'],
  },
  'Border.Color.Magenta5': {
    borderColor: Variables['Color.Magenta5'],
  },
  'Border.Color.Magenta6': {
    borderColor: Variables['Color.Magenta6'],
  },
  'Border.Color.Magenta7': {
    borderColor: Variables['Color.Magenta7'],
  },
  'Border.Color.Magenta8': {
    borderColor: Variables['Color.Magenta8'],
  },
  'Border.Color.Magenta9': {
    borderColor: Variables['Color.Magenta9'],
  },
  'Border.Color.Magenta10': {
    borderColor: Variables['Color.Magenta10'],
  },
  'Border.Color.Orange1': {
    borderColor: Variables['Color.Orange1'],
  },
  'Border.Color.Orange2': {
    borderColor: Variables['Color.Orange2'],
  },
  'Border.Color.Orange3': {
    borderColor: Variables['Color.Orange3'],
  },
  'Border.Color.Orange4': {
    borderColor: Variables['Color.Orange4'],
  },
  'Border.Color.Orange5': {
    borderColor: Variables['Color.Orange5'],
  },
  'Border.Color.Orange6': {
    borderColor: Variables['Color.Orange6'],
  },
  'Border.Color.Orange7': {
    borderColor: Variables['Color.Orange7'],
  },
  'Border.Color.Orange8': {
    borderColor: Variables['Color.Orange8'],
  },
  'Border.Color.Orange9': {
    borderColor: Variables['Color.Orange9'],
  },
  'Border.Color.Orange10': {
    borderColor: Variables['Color.Orange10'],
  },
  'Border.Color.Primary': {
    borderColor: Variables['Color.Primary'],
  },
  'Border.Color.Primary1': {
    borderColor: Variables['Color.Primary1'],
  },
  'Border.Color.Primary2': {
    borderColor: Variables['Color.Primary2'],
  },
  'Border.Color.Primary3': {
    borderColor: Variables['Color.Primary3'],
  },
  'Border.Color.Primary4': {
    borderColor: Variables['Color.Primary4'],
  },
  'Border.Color.Primary5': {
    borderColor: Variables['Color.Primary5'],
  },
  'Border.Color.Primary6': {
    borderColor: Variables['Color.Primary6'],
  },
  'Border.Color.Primary7': {
    borderColor: Variables['Color.Primary7'],
  },
  'Border.Color.Primary8': {
    borderColor: Variables['Color.Primary8'],
  },
  'Border.Color.Primary9': {
    borderColor: Variables['Color.Primary9'],
  },
  'Border.Color.Primary10': {
    borderColor: Variables['Color.Primary10'],
  },
  'Border.Color.Purple1': {
    borderColor: Variables['Color.Purple1'],
  },
  'Border.Color.Purple2': {
    borderColor: Variables['Color.Purple2'],
  },
  'Border.Color.Purple3': {
    borderColor: Variables['Color.Purple3'],
  },
  'Border.Color.Purple4': {
    borderColor: Variables['Color.Purple4'],
  },
  'Border.Color.Purple5': {
    borderColor: Variables['Color.Purple5'],
  },
  'Border.Color.Purple6': {
    borderColor: Variables['Color.Purple6'],
  },
  'Border.Color.Purple7': {
    borderColor: Variables['Color.Purple7'],
  },
  'Border.Color.Purple8': {
    borderColor: Variables['Color.Purple8'],
  },
  'Border.Color.Purple9': {
    borderColor: Variables['Color.Purple9'],
  },
  'Border.Color.Purple10': {
    borderColor: Variables['Color.Purple10'],
  },
  'Border.Color.Red1': {
    borderColor: Variables['Color.Red1'],
  },
  'Border.Color.Red2': {
    borderColor: Variables['Color.Red2'],
  },
  'Border.Color.Red3': {
    borderColor: Variables['Color.Red3'],
  },
  'Border.Color.Red4': {
    borderColor: Variables['Color.Red4'],
  },
  'Border.Color.Red5': {
    borderColor: Variables['Color.Red5'],
  },
  'Border.Color.Red6': {
    borderColor: Variables['Color.Red6'],
  },
  'Border.Color.Red7': {
    borderColor: Variables['Color.Red7'],
  },
  'Border.Color.Red8': {
    borderColor: Variables['Color.Red8'],
  },
  'Border.Color.Red9': {
    borderColor: Variables['Color.Red9'],
  },
  'Border.Color.Red10': {
    borderColor: Variables['Color.Red10'],
  },
  'Border.Color.Secondary': {
    borderColor: Variables['Color.Grey6'],
  },
  'Border.Color.Success': {
    borderColor: Variables['Color.Grey6'],
  },
  'Border.Color.Success1': {
    borderColor: Variables['Color.Success1'],
  },
  'Border.Color.Success2': {
    borderColor: Variables['Color.Success2'],
  },
  'Border.Color.Success3': {
    borderColor: Variables['Color.Success3'],
  },
  'Border.Color.Success4': {
    borderColor: Variables['Color.Success4'],
  },
  'Border.Color.Success5': {
    borderColor: Variables['Color.Success5'],
  },
  'Border.Color.Success6': {
    borderColor: Variables['Color.Success6'],
  },
  'Border.Color.Success7': {
    borderColor: Variables['Color.Success7'],
  },
  'Border.Color.Success8': {
    borderColor: Variables['Color.Success8'],
  },
  'Border.Color.Success9': {
    borderColor: Variables['Color.Success9'],
  },
  'Border.Color.Success10': {
    borderColor: Variables['Color.Success10'],
  },
  'Border.Color.Volcano1': {
    borderColor: Variables['Color.Volcano1'],
  },
  'Border.Color.Volcano2': {
    borderColor: Variables['Color.Volcano2'],
  },
  'Border.Color.Volcano3': {
    borderColor: Variables['Color.Volcano3'],
  },
  'Border.Color.Volcano4': {
    borderColor: Variables['Color.Volcano4'],
  },
  'Border.Color.Volcano5': {
    borderColor: Variables['Color.Volcano5'],
  },
  'Border.Color.Volcano6': {
    borderColor: Variables['Color.Volcano6'],
  },
  'Border.Color.Volcano7': {
    borderColor: Variables['Color.Volcano7'],
  },
  'Border.Color.Volcano8': {
    borderColor: Variables['Color.Volcano8'],
  },
  'Border.Color.Volcano9': {
    borderColor: Variables['Color.Volcano9'],
  },
  'Border.Color.Volcano10': {
    borderColor: Variables['Color.Volcano10'],
  },
  'Border.Color.Warning': {
    borderColor: Variables['Color.Orange6'],
  },
  'Border.Color.Warning1': {
    borderColor: Variables['Color.Warning1'],
  },
  'Border.Color.Warning2': {
    borderColor: Variables['Color.Warning2'],
  },
  'Border.Color.Warning3': {
    borderColor: Variables['Color.Warning3'],
  },
  'Border.Color.Warning4': {
    borderColor: Variables['Color.Warning4'],
  },
  'Border.Color.Warning5': {
    borderColor: Variables['Color.Warning5'],
  },
  'Border.Color.Warning6': {
    borderColor: Variables['Color.Warning6'],
  },
  'Border.Color.Warning7': {
    borderColor: Variables['Color.Warning7'],
  },
  'Border.Color.Warning8': {
    borderColor: Variables['Color.Warning8'],
  },
  'Border.Color.Warning9': {
    borderColor: Variables['Color.Warning9'],
  },
  'Border.Color.Warning10': {
    borderColor: Variables['Color.Warning10'],
  },
  'Border.Color.White': {
    borderColor: Variables['Color.White'],
  },
  'Border.Color.Yellow1': {
    borderColor: Variables['Color.Yellow1'],
  },
  'Border.Color.Yellow2': {
    borderColor: Variables['Color.Yellow2'],
  },
  'Border.Color.Yellow3': {
    borderColor: Variables['Color.Yellow3'],
  },
  'Border.Color.Yellow4': {
    borderColor: Variables['Color.Yellow4'],
  },
  'Border.Color.Yellow5': {
    borderColor: Variables['Color.Yellow5'],
  },
  'Border.Color.Yellow6': {
    borderColor: Variables['Color.Yellow6'],
  },
  'Border.Color.Yellow7': {
    borderColor: Variables['Color.Yellow7'],
  },
  'Border.Color.Yellow8': {
    borderColor: Variables['Color.Yellow8'],
  },
  'Border.Color.Yellow9': {
    borderColor: Variables['Color.Yellow9'],
  },
  'Border.Color.Yellow10': {
    borderColor: Variables['Color.Yellow10'],
  },
});

export default BorderStyles;
