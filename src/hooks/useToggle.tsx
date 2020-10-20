import * as React from 'react';

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = React.useState(initialValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
}


