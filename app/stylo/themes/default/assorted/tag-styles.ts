/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TVariable } from '../../types';
import * as _ from '../__generated__/assorted/tag-styles';

export const getTagStyles = (variables: Record<TVariable, string | number>) => _.getTagStyles(variables);

export const getTagTextStyles = (variables: Record<TVariable, string | number>) => _.getTagTextStyles(variables);

export const getTagIconStyles = () => _.getTagIconStyles();

export const getTagAvatarStyles = (variables: Record<TVariable, string | number>) => _.getTagAvatarStyles(variables);
