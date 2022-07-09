export declare type TStyleNamespace = 'IconStyles' | 'ImageBackgroundStyles' | 'ImageStyles' | 'SafeAreaViewStyles' | 'ScrollViewStyles' | 'ScrollViewContentContainerStyles' | 'TextInputStyles' | 'TextStyles' | 'TouchableStyles' | 'ViewStyles';
export declare type TStylesProps<TStyleName extends string> = {
    styleNamespace?: TStyleNamespace;
    styleNames: TStyleName[];
};
