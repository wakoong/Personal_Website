import * as React from 'react';
import styled from 'styled-components';

interface IButtonStyleProps {
  background: string | null | undefined;
  padding: string,
}

const Button = styled.button`
  background: ${(props: IButtonStyleProps) => props.background ? props.background: null};
  color: ${(props) => props.color ? props.color : null};
  padding: ${(props) => props.padding ? props.padding : '1em 2em'};
  cursor: pointer;
`

interface IButtonProps {
  background?: string;
  className?: string;
  color?: string;
  padding?: string;
  text: string;
  onClick?: () => void;
}

export default ({ className, background, color, onClick, padding, text}: IButtonProps) => {
  return <Button className={className} background={background} color={color} padding={padding} onClick={onClick}>{text}</Button>
}
