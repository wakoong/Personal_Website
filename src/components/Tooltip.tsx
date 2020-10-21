import * as React from 'react'
import styled from 'styled-components';

interface IToolTipProps {
  children: JSX.Element,
  coords: {
    left: number,
    right: number,
  },
  updateTooltipCoords: () => void;

}

const Tooltip = ({children, coords, updateTooltipCoords}: IToolTipProps) => {
  return <div>tooltip</div>
}
