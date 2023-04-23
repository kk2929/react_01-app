import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps } from './index';

const something = action('something');
const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  something(e.currentTarget.innerText);
};

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  { children, ...args }: ButtonProps
) => {
  return <Button {...args}>{children}</Button>;
};

export const デフォルト = Template.bind({});
デフォルト.args = {
  children: `デフォルト`,
  onClick
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: `Outlined<br />２行目`,
  variant: 'outlined',
  onClick
};

export const Success = () => <Button color='success'>dfas<br />改行</Button>;
export const Warning = () => <Button color='warning'>Hello!<br />改行</Button>;
// export const Success = () => <Button color='success'>dfas<br />改行</Button>;
// export const Warning = () => <Button color='warning'>Hello!<br />改行</Button>;