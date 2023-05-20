import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // FOR THIS PROJECT ONLY!!!!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
