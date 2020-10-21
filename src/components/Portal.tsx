import * as React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal') as HTMLElement;
const Portal = ({children}: any) => {
  const div = document.createElement('div');
  div.classList.add('portal');
  const el = React.useRef(div);

  React.useEffect(() => {
    modalRoot!.appendChild(el.current);
    return () => void modalRoot!.removeChild(el.current)
  }, [])

  return createPortal(children, el.current);
}

export default Portal;
