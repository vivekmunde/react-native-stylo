/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import { TVariable } from '../../types';
import _getBackgroundColorStyles from '../generic/background-color-styles';

const getSafeAreaViewStyles = (variables: Record<TVariable, string | number>) => _getBackgroundColorStyles(variables);

export default getSafeAreaViewStyles;
