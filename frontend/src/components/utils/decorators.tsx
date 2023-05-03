import React, { cloneElement } from 'react';

export const withStyle = (style: any) => (component: any) => {
	return cloneElement(component, { style })
};
export const wrapWithStyle = (style: any) => (component: any) => {
	return <div style={style}>{component}</div>
};
