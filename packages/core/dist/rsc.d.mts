import * as react_jsx_runtime from 'react/jsx-runtime';
import { C as Config, U as UserGenerics, M as Metadata } from './walk-tree-Ctf3FZQI.mjs';
export { m as migrate, r as resolveAllData, t as transformProps, w as walkTree } from './walk-tree-Ctf3FZQI.mjs';
import 'react';

declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, metadata, }: {
    config: UserConfig;
    data: G["UserData"];
    metadata?: Metadata;
}): react_jsx_runtime.JSX.Element;

export { Render };
