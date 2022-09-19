import { lazy } from 'react';

// @ts-ignore
export const MainPageAsync = lazy(() => new Promise(res => setTimeout(() => res(import('./MainPage')), 1000)));
