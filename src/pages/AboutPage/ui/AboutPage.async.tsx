import { lazy } from 'react';
// @ts-ignore
export const AboutPageAsync = lazy(() => new Promise(res => setTimeout(() => res(import('./AboutPage')), 1000)));