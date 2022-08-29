import styled from 'styled-components';
import { theme } from '../../themes/theme';
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
      return '12px 24px';
  }
};

const getButtonColor = (buttonColor: ButtonVariants): string => {
  switch (buttonColor) {
    case 'solid':
      return theme.colors.blue[200];

    case 'ghost':
      return 'transparent';

    case 'outline':
      return 'transparent';

    case 'link':
      return 'transparent';

    default:
      return '';
  }
};

const getButtonBorderColor = (buttonColor: ButtonVariants): string => {
  switch (buttonColor) {
    case 'solid':
      return theme.colors.blue[200];

    case 'outline':
      return theme.colors.blue[200];

    case 'ghost':
      return 'transparent';

    case 'link':
      return 'transparent';

    default:
      return '';
  }
};

export const ButtonGlobalStyles = styled.button<ButtonProps>`
  border-radius: 0.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: none;
  padding: ${({ size }) => getButtonSize(size as ButtonSizes)};
  display: ${({ isFullWidth }) => (isFullWidth ? 'block' : 'inline-flex')};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`;

export const Button = styled(ButtonGlobalStyles)<ButtonProps>`
  background-color: ${({ variant }) => getButtonColor(variant as ButtonVariants)};
  border: ${({ variant }) => `1px solid ${getButtonBorderColor(variant as ButtonVariants)}`};
`;
