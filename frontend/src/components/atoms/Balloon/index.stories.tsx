import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Balloon, { BalloonTip } from './index';
import { Icon } from '../Icon/index';

export default {
  title: 'atoms/Balloon',
  component: Balloon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Balloon>;

const Template: ComponentStory<typeof Balloon> = (
  { children, ...args }: any
) => <Balloon {...args}>{children}</Balloon>;

export const 文字数2 = Template.bind({});
文字数2.args = {
  children: `次へ❌`
};
export const 改行 = Template.bind({});
改行.args = {
  children: <>Hello!<br />改行</>
};
export const 絶対座標配置 = Template.bind({});
絶対座標配置.args = {
  children: `左上から 50px に配置`,
  className: 'test',
  style: { position: 'absolute', top: '50px', left: '50px' }
};
export const アイコン = Template.bind({});
アイコン.args = {
  children: <Icon iconName="Send" />,
};

export const バルーンチップ = () => { //controlsが利かない
  return (
    <p style={{ marginTop: "50px" }}>
      これは文章中の
      <BalloonTip
        label="注釈を記述するUI"
        style={{ marginTop: '50px' }}
      >
        バルーンチップ
      </BalloonTip>
      です
    </p>
  )
}

