import React, { FC } from 'react';

export function containPresenter<T>(Container: FC<any>, Presenter: FC<any>): FC<T> {
  return props => (
    <Container presenter={(presenterProps: any) => <Presenter {...presenterProps} />} {...props} />
  );
}