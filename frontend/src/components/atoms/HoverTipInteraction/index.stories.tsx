import React from 'react';
import { storiesOf, ComponentStory, ComponentMeta } from '@storybook/react';
import HoverTipInteraction, { Tip, Marker } from './index';
import { withStyle } from '../../utils/decorators';

export default {
  title: 'atoms/HoverTipInteraction',
  component: HoverTipInteraction,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HoverTipInteraction>;

const Template: ComponentStory<typeof HoverTipInteraction> = (
  { children, ...args }: any
) => (
  <HoverTipInteraction {...args}>
    <span>ホバーしてね</span>
    <Tip><span>チップだよ</span></Tip>
  </HoverTipInteraction>
)

export const デフォルト = Template.bind({});
デフォルト.args = {
  style: { display: 'inline-block', margin: '50px' },
};


const Template00: ComponentStory<typeof HoverTipInteraction> = (
  { children, ...args }: any
) => (
  <HoverTipInteraction {...args}>
    <Marker><span>ホバーしてね</span></Marker>
    <Tip><span>チップだよ</span></Tip>
  </HoverTipInteraction>
)

export const マーカー = Template00.bind({});
マーカー.args = {
  style: { display: 'inline-block', margin: '50px' },
};