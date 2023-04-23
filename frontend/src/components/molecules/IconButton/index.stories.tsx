import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconButton, { IconButtonProps } from './index';

const something = action('something');
const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  something(e.currentTarget.innerText);
};

export default {
  title: 'molecules/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (
  { children, ...args }: IconButtonProps
) => {
  return <IconButton {...args} />;
};

export const 送信 = Template.bind({});
送信.args = {
  kind: "Send",
  onClick
};

export const 削除 = Template.bind({});
削除.args = {
  kind: "Delete",
  onClick
};