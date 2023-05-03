import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SendButton, { SendButtonProps } from './index';

const something = action('something');
const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  something(e.currentTarget.innerText);
};

export default {
  title: 'molecules/SendButton',
  component: SendButton,
} as ComponentMeta<typeof SendButton>;

const Template: ComponentStory<typeof SendButton> = (
  { children, ...args }: SendButtonProps
) => {
  return <SendButton {...args} />;
};

export const デフォルト = Template.bind({});
デフォルト.args = {
  onClick
};