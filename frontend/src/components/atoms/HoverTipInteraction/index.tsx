import React, { Component, FC } from 'react';
import styles from './styles.module.css';
import { containPresenter } from '../../utils/HoC';

const HoverTipInteractionPresenter: FC<
  React.ComponentProps<'span'>
> = ({ children, className, ...props }) => (
  <span className={[styles.root, className].join(' ')} {...props}>
    {children}
  </span>
);

const HoverTipInteractionContainer: FC<
  {
    presenter: (arg: any) => FC;  //引数：presenterのprops、戻り値：presenterから生成されたコンポーネント
  } & React.ComponentProps<any>
> = ({ presenter, children, ...props }) => {
  children = React.Children.map(children, child => {
    if (child.type.displayName === 'Tip') {
      const grandChild = React.Children.only(child.props.children);
      return React.cloneElement(grandChild, {
        className: [styles.tip, grandChild.props.className].join(' '),
      });
    } else if (child.type.displayName === 'Marker') {
      const grandChild = child.props.children;
      return React.cloneElement(grandChild, {
        className: [styles.marker, grandChild.props.className].join(' '),
      });
    }
    return child;
  });
  return presenter({ children, ...props });
};


type hoverTipInteraction = React.ComponentProps<any>

const HoverTipInteraction = containPresenter<hoverTipInteraction>(HoverTipInteractionContainer, HoverTipInteractionPresenter);

export default HoverTipInteraction;

export const Tip: FC<hoverTipInteraction> = () => <span>これはレンダリングされないもの</span>;
export const Marker: FC<hoverTipInteraction> = () => <span>これはレンダリングされないもの</span>;
