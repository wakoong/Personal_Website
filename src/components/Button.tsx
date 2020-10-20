import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.color ? props.color : null};
  padding: 1em 2em;
  cursor: pointer;
`

interface IButtonProps {
  background?: string;
  color?: string;
  text: string;
}

export default ({ color, text}: IButtonProps) => {
  return <Button color={color}>{text}</Button>
}
