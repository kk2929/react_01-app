import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Table, TableProps, Head } from './index';

const something = action('something');
const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  something(e.currentTarget.innerText);
};

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) { return { name, calories, fat, carbs, protein }; }
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const heads: Head[] = [
  { name: '品名', keyName: 'name', props: { align: 'left' } },
  { name: 'カロリー[kcal]', keyName: 'calories', props: { align: 'right' } },
  { name: '脂肪', keyName: 'fat', props: { align: 'right' } },
  { name: '糖質', keyName: 'carbs', props: { align: 'right' } },
  { name: 'タンパク質', keyName: 'protein', props: { align: 'right' } }
]


export default {
  title: 'organisms/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (
  { ...args }: TableProps
) => {
  return <Table {...args} />;
};

export const デフォルト = Template.bind({});
デフォルト.args = {
  heads,
  rows
};

export const a = Template.bind({});
a.args = {
  heads,
  rows
};