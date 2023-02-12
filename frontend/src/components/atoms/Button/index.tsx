import React, { FC } from 'react';
import { Button as MuiButton } from "@mui/material";

type ButtonFactory_ = React.ComponentProps<typeof MuiButton>
type ButtonFactory = Omit<ButtonFactory_, 'color'>

type Color = "inherit" | "primary" | "secondary" | "default" | undefined


const buttonFactory = (color: Color): FC<ButtonFactory> => ({
  children, variant = "contained", ...props
}) => (
  <MuiButton
    // color={color}
    variant={variant}
    {...props}
  >
    {children}
  </MuiButton>
);


const Button = buttonFactory('default');
export const PrimaryButton = buttonFactory('primary');
export const WarningButton = buttonFactory('secondary');

export default Button;