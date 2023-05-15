import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise (resolve => {
    // @ts-ignore
    //FOR THIS PROJECT ONLY!!!!
    setTimeout( () => resolve (import('./MainPage')), 1500)
}));