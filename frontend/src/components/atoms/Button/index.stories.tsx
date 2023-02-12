import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { PrimaryButton, SuccessButton, WarningButton } from './index';

type ButtonProps = React.ComponentProps<typeof Button>

const something = action('something');
const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  something(e.currentTarget.innerText);
};

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (
  { children, ...args }: ButtonProps
) => {
  // return <Button {...args} onClick={onClick}>{children}</Button>
  return <Button {...args}>{children}</Button>
};

export const デフォルト = Template.bind({});
デフォルト.args = { children: `デフォルト`, onClick };

export const Outlined = Template.bind({});
Outlined.args = {
  children: `Outlined<br />２行目`,
  variant: 'outlined',
  onClick
};

export const Success = () => <SuccessButton>dfas<br />改行</SuccessButton>;
export const Warning = () => <WarningButton>Hello!<br />改行</WarningButton>;



// storiesOf('atoms', module)
//   .add('デフォルト', () => <Button>デフォルトDefault AAA</Button>)
//   .add('デフォルト-outlined', () => <Button variant='outlined'>デフォルト</Button>)
//   .add('プライマリ', () => <PrimaryButton>プライマリ</PrimaryButton>)
//   .add('警告', () => <WarningButton>警告</WarningButton>);
