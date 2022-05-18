import React from 'react';
export declare type TContext = {
    variables?: {
        [name: string]: string | number;
    };
    styles: {
        [name: string]: {
            [name: string]: object;
        };
    };
};
declare const _default: React.Context<TContext>;
export default _default;
