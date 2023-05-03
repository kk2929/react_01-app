import React, { FC } from 'react';
import styles from './styles.module.css';
import HoverTipInteraction, { Tip, Marker } from '../HoverTipInteraction/index';

const Balloon: FC<
  // {
  //   children: React.ReactNode;
  // } & React.ComponentProps<'span'>
  React.ComponentProps<'span'>
> = ({ children, className, ...props }) => (
  <span className={[styles.balloon, className].join(' ')} {...props}>
    {children}
  </span>
);

export default Balloon;

export const BalloonTip: FC<
  {
    children: React.ReactNode;
    label: String;
  } & React.ComponentProps<typeof HoverTipInteraction>
> = ({ children, label, className, ...props }) => (
  <HoverTipInteraction className={className} {...props}>
    <Marker><span>{children}</span></Marker>
    <Tip><Balloon>{label}</Balloon></Tip>
  </HoverTipInteraction>
);
