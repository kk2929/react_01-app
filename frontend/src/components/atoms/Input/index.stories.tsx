import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputProps } from './index';

export default {
  title: 'atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (
  { children, ...args }: InputProps
) => {
  return <Input {...args} />;
};


export const デフォルト = Template.bind({});
デフォルト.args = {
  label: `デフォルト`,
};

export const エラー = Template.bind({});
エラー.args = {
  label: `エラー`,
  errorMsg: "エラーが発生しています",
};

export const disabled = Template.bind({});
disabled.args = {
  value: "readOnly",
  disabled: true,
};
