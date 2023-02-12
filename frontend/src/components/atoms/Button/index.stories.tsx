import React from 'react';
import { storiesOf } from '@storybook/react';
import Button, { PrimaryButton, WarningButton } from './index';

storiesOf('atoms', module)
  .add('デフォルト', () => <Button>デフォルト</Button>)
  .add('プライマリ', () => <PrimaryButton>プライマリ</PrimaryButton>)
  .add('警告', () => <WarningButton>警告</WarningButton>);
