import React, { FC } from 'react';
import styles from './styles.module.css';
import { containPresenter } from '../../utils/HoC';
import SendIcon from '@mui/icons-material/Send';

export const IconList = {
  SendIcon: 'SendIcon',
};


export type IconProps = {
  iconName: string | typeof React.Component;
} & React.ComponentProps<typeof SendIcon>

export const IconPresenter: FC<IconProps> = ({
  iconName: IconName,
  height = 20,
  width = 20,
  ...props
}) => {
  console.log(SendIcon);
  console.log(IconName);
  console.log(<SendIcon />);
  console.log(<IconName />);

  return (
    // <IconName
    <SendIcon
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

// export const Icon = ({ iconName, props }: React.ComponentProps<any>) => {
//   const Icon = containPresenter(IconContainer, IconPresenter);
//   return <Icon {...{ iconName, ...props }} />;
// };
export const Icon = containPresenter(IconContainer, IconPresenter);