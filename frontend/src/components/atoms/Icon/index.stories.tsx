import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Icon, IconProps } from './index';

const something = action('something');
const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  something(e.currentTarget.innerText);
};

export default {
  title: 'atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (
  { children, ...args }: IconProps
) => {
  return <Icon {...args} />;
};

export const デフォルト = Template.bind({});
デフォルト.args = {
  iconName: 'Send'
};

export const クリッカブル = Template.bind({});
クリッカブル.args = {
  iconName: 'Send',
  onClick
};