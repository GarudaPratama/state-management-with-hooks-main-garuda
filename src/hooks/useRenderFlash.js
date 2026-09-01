/* eslint-disable react-hooks/refs */
import { useEffect, useRef } from 'react';

export function useRenderFlash() {
  const ref = useRef(null);
  const renderCount = useRef(0);

  renderCount.current += 1;

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('render-flash');
      void ref.current.offsetWidth;
      ref.current.classList.add('render-flash');
    }
  });

  return { ref, renderCount: renderCount.current };
}
