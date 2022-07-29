/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TVariable } from '../../types';
import {
  getAvatarJacketStyles as _getAvatarJacketStyles, getAvatarStyles as _getAvatarStyles
} from '../__generated__/assorted/avatar-styles';

export const getAvatarStyles = (variables: Record<TVariable, string | number>) => _getAvatarStyles(variables);

export const getAvatarJacketStyles = (variables: Record<TVariable, string | number>) => _getAvatarJacketStyles(variables);
