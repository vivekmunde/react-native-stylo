import React from 'react';
import { Text as RNSText, TTextProps } from 'react-native-stylo';
import { TTextStyle } from '../themes/types';

class Text extends React.Component<TTextProps<TTextStyle>> {
  render() {
    return <RNSText {...this.props} />;
  }
}

export default Text;
