/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TVariable } from '../types';
import _Variables from './__generated__/variables';

export type TVariables = Record<'light' | 'dark', Record<TVariable, string | number>>;

const Variables: TVariables = {
  light: {
    ..._Variables.light,
  },
  dark: {
    ..._Variables.dark,
  },
};

export default Variables;
