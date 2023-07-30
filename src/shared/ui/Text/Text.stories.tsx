import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Title title title',
    text: ' description description description',
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
    title: 'Title title title',
};

export const OnlyText = Template.bind({});

OnlyText.args = {
    text: ' description description description',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    title: 'Title title title',
    text: ' description description description',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
    title: 'Title title title',
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});

OnlyTextDark.args = {
    text: ' description description description',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});

Error.args = {
    title: 'Title title title',
    text: ' description description description',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});

ErrorDark.args = {
    title: 'Title title title',
    text: ' description description description',
    theme: TextTheme.ERROR,
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
