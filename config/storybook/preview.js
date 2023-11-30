import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
    SuspenseDecorator,
} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            {
                name: 'light',
                class: ['app', Theme.LIGHT],
                color: '#ffffff',
            },
            {
                name: 'dark',
                class: ['app', Theme.DARK],
                color: '#000000',
            },
            {
                name: 'orange',
                class: ['app', Theme.ORANGE],
                color: '#ffb005',
            },
        ],
    },
};

export const decorators = [StyleDecorator, RouterDecorator, SuspenseDecorator];
