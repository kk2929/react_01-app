import React, { FC } from 'react';
import styles from './styles.module.css';
import { containPresenter } from '../../utils/HoC';
import Send from '@mui/icons-material/Send';

export const iconList = {
  Send,
};

type IconPresenterType = {
  iconName: keyof typeof iconList;
} & React.ComponentProps<typeof Send> //FIXME: typeof 汎用的なIconにする

export const IconPresenter: FC<IconPresenterType> = ({
  iconName,
  height = 20,
  width = 20,
  ...props
}) => {
  const Tag = iconList[iconName];
  return (
    <Tag
      height={height}
      width={width}
      {...props}
    />
  )
};


type IconContainerType = {
  presenter: (arg: any) => FC;  //引数：presenterのprops、戻り値：presenterから生成されたコンポーネント
} & React.ComponentProps<any>

export const IconContainer: FC<IconContainerType> = ({
  presenter,
  onClick,
  className = '',
  ...props
}) => {
  if (onClick) className += ` ${styles.clickable}`;
  return presenter({ onClick, className, ...props });
};


export type IconProps = IconContainerType | IconPresenterType;

export const Icon: FC<IconProps> = containPresenter(IconContainer, IconPresenter);