import { useEffect, useRef } from 'react';

const useClickOutside = (handler) => {
  const domNode = useRef(null);

  useEffect(() => {
    const handleClose = (event) => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClose);

    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  });

  return domNode;
};

export default useClickOutside;