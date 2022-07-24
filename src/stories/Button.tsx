import React from 'react';
import { ButtonProps } from '../components/Button/types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Button({ ...props }: ButtonProps) {
  return <button type="button">{props.children}</button>;
}
