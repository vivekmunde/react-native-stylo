import React from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
export declare type TContext = {
    variables: Record<string, string | number>;
    styles: {
        IconStyles: Record<string, TextStyle>;
        ImageBackgroundStyles: Record<string, ViewStyle>;
        ImageStyles: Record<string, ImageStyle>;
        SafeAreaViewStyles: Record<string, ViewStyle>;
        ScrollViewStyles: Record<string, ViewStyle>;
        ScrollViewContentContainerStyles: Record<string, ViewStyle>;
        TextInputStyles: Record<string, TextStyle>;
        TextStyles: Record<string, TextStyle>;
        TouchableStyles: Record<string, ViewStyle>;
        ViewStyles: Record<string, ViewStyle>;
    };
};
declare const _default: React.Context<TContext>;
export default _default;
