import * as React from 'react';

export const useCoords = () => {
  const [coords, setCoords] = React.useState({});
  const [isSelected, setSelect] = React.useState(false);

  const handleCoords = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y + window.scrollY
    })
    setSelect(!isSelected);
  }
  console.log({coords, isSelected})

  return [coords, isSelected, handleCoords];
}
