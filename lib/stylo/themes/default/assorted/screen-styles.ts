/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TVariable } from '../../types';
import _getScreenStyles from '../__generated__/assorted/screen-styles';

const getScreenStyles = (variables: Record<TVariable, string | number>) => _getScreenStyles(variables);

export default getScreenStyles;
