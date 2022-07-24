import styled from 'styled-components';
import { ButtonProps, ButtonSizes, ButtonVariants } from './types';

const getButtonSize = (buttonSize: ButtonSizes): string => {
  switch (buttonSize) {
    case 'large':
      return '10px 30px';

    case 'medium':
      return '8px 25px';

    case 'small':
      return '6px 20px';

    default:
      return '0 25px';
  }
};

const getButtonColor = (buttonColor: ButtonVariants): string => {
  switch (buttonColor) {
    case 'solid':
      return '#256eff';

    case 'soft':
      return '#145eff';

    case 'outline':
      return '#245eff';

    case 'plain':
      return 'transparent';

    default:
      return '';
  }
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  border-radius: 0.2rem;
  padding: ${({ size }) => getButtonSize(size as ButtonSizes)};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: none;
  color: #333;
  display: ${({ isFullWidth }) => (isFullWidth ? 'block' : 'inline-flex')};
  background-color: ${({ variant }) => getButtonColor(variant as ButtonVariants)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`;
