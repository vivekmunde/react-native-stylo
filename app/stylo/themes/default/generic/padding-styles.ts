/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import TVariable from '../../types/variable';
import _getPaddingStyles from '../__generated__/generic/padding-styles';

const getPaddingStyles = (variables: Record<TVariable, string | number>) =>_getPaddingStyles(variables);

export default getPaddingStyles;
