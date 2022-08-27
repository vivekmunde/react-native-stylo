import React from 'react';
import { TContext } from './theme-context';
export declare type TProps = TContext & {
    children: React.ReactNode;
};
declare const ThemeProvider: React.FC<TProps>;
export default ThemeProvider;
