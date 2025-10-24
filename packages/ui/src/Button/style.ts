import styled, { css, RuleSet } from "styled-components";
import { type ButtonSize } from './index';

const sizeStyles: Record<ButtonSize, RuleSet> = {
  xs: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  sm: css`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  base: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  lg: css`
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
  xl: css`
    padding: 1rem 2rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  `,
};

const StyledButton = styled.button<{ $size: ButtonSize }>`
  background: #646cff;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  font-family: inherit;
  transition: all 0.2s ease;

  /* Size variant */
  ${props => sizeStyles[props.$size]}

  /* Interactive states */
  &:hover {
    background: #535bf2;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid #646cff;
    outline-offset: 2px;
  }

  &:disabled {
    background: #a0a0a0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export default StyledButton;