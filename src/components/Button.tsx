import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.color ? props.color : null};
  padding: 1em 2em;
  cursor: pointer;
`

interface IButtonProps {
  background?: string;
  className?: string;
  color?: string;
  text: string;
  onClick?: boolean | (() => void);
}

export default ({ className, color, onClick, text}: IButtonProps) => {
  return <Button className={className} color={color} onClick={onClick}>{text}</Button>
}
