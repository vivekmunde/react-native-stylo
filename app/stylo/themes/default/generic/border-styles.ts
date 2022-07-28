/* -------------------------------------------------------------------------------- */
/*                               react-native-stylo                                 */
/*           GitHub: https://github.com/vivekmunde/react-native-stylo               */
/*      Docs: https://vivekmunde.github.io/react-native-stylo-documentation/        */
/* -------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------- */
/*                           Customize as per your needs                            */
/* -------------------------------------------------------------------------------- */

import TVariable from '../../types/variable';
import _getBorderStyles from '../__generated__/generic/border-styles';

const getBorderStyles = (variables: Record<TVariable, string | number>) =>_getBorderStyles(variables);

export default getBorderStyles;
