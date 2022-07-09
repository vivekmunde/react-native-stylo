export type TStyleNamespace =
  | 'IconStyles'
  | 'ImageBackgroundStyles'
  | 'ImageStyles'
  | 'SafeAreaViewStyles'
  | 'ScrollViewStyles'
  | 'ScrollViewContentContainerStyles'
  | 'TextInputStyles'
  | 'TextStyles'
  | 'TouchableStyles'
  | 'ViewStyles';

export type TStylesProps<TStyleName extends string> = {
  styleNamespace?: TStyleNamespace;
  styleNames: TStyleName[];
};
