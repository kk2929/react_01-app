import React, { FC } from 'react';
import styles from './styles.module.css';
import MuiButton from '@material-ui/core/Button';

type ButtonFactory = React.ComponentProps<typeof MuiButton>  //「|」だとダメ

type Color = "inherit" | "primary" | "secondary" | "default" | undefined


const buttonFactory = (color: Color): FC<ButtonFactory> => ({
  children, className, ...props
}) => (
  <MuiButton
    color={color}
    variant="contained"
    {...props}
  >
    {children}
  </MuiButton>
);


export const Button = buttonFactory('default');
export const PrimaryButton = buttonFactory('primary');
export const WarningButton = buttonFactory('default');

export default Button;