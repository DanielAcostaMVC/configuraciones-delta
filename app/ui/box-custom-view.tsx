'use client';

import { FC, PropsWithChildren } from 'react';
import BoxEstilos from './box-custom.style';
const { BoxCustom } = BoxEstilos();

export const BoxCustomView: FC<PropsWithChildren> = ({ children }) => {
	return <BoxCustom>{children}</BoxCustom>;
};