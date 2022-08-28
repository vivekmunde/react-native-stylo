import React, { useEffect, useRef, useState } from 'react';

const DelayedMount: React.FC<{ delay?: number }> = ({ delay, children }) => {
  const refWait = useRef<{
    timer: NodeJS.Timeout | null | undefined;
    clear: () => void;
  }>({
    timer: null,
    clear: () => {
      if (refWait.current.timer) {
        clearInterval(refWait.current.timer);
        refWait.current.timer = null;
      }
    },
  });

  const [mount, setMount] = useState(false);

  useEffect(() => {
    refWait.current.timer = setTimeout(() => {
      refWait.current.clear();
      setMount(true);
    }, delay ?? 500);
  });

  useEffect(() => refWait.current.clear, []);

  return mount ? <React.Fragment>{children}</React.Fragment> : null;
};

export default DelayedMount;
