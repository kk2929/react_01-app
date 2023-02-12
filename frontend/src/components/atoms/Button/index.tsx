import React, { FC } from 'react';
import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

const StyledMuiButton = styled(MuiButton)`
text-transform: none;
`;

export type ButtonProps = React.ComponentProps<typeof MuiButton>

const Button: FC<ButtonProps> = ({
  children, variant = 'contained', ...props
}) => (
  <StyledMuiButton
    variant={variant}
    {...props}
  >
    {children}
  </StyledMuiButton>
);

export default Button;