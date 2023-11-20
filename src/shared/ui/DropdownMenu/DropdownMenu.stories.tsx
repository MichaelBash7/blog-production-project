import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button/Button';
import { DropdownMenu } from './DropdownMenu';

export default {
    title: 'shared/Dropdown',
    component: DropdownMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
