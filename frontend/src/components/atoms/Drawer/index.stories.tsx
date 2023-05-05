import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Drawer, { DrawerProps } from './index';

export default {
  title: 'atoms/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (
  { children, ...args }: DrawerProps
) => {
  return <Drawer {...args}>{children}</Drawer>;
};


export const デフォルト = Template.bind({});
デフォルト.args = {
  children:
    <div>
      <p style={{ marginBottom: "20rem" }}>content</p>
      <p>content</p>
    </div>,
  // trigger: <button>トリガー</button>
};

export const リンク = Template.bind({});
リンク.args = {
  children: <p>content</p>,
  // trigger: <a>トリガー</a>
};
