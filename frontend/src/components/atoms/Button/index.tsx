import React, { FC } from 'react';
import { Button as MuiBtn } from "@mui/material";
import styled from "@emotion/styled";

const MuiButton = styled(MuiBtn)`
text-transform: none;
`;

type ButtonFactory_ = React.ComponentProps<typeof MuiBtn>
type ButtonFactory = Omit<ButtonFactory_, 'color'>

type Color = "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined

const buttonFactory = (color?: Color): FC<ButtonFactory> => ({
  children, variant = "contained", ...props
}) => (
  <MuiButton
    color={color}
    variant={variant}
    {...props}
  >
    {children}
  </MuiButton>
);


const Button = buttonFactory();
export const PrimaryButton = buttonFactory('primary');
export const SecondaryButton = buttonFactory('secondary');
export const SuccessButton = buttonFactory('success');
export const ErrorButton = buttonFactory('error');
export const InfoButton = buttonFactory('info');
export const WarningButton = buttonFactory('warning');

export default Button;