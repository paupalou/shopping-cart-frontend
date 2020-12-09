import { useCallback, useState } from 'react';

export interface IModalProps {
  isShowing: boolean;
  toggle: () => void;
}

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = useCallback(() => {
    setIsShowing(!isShowing);
  }, [setIsShowing, isShowing]);

  return { isShowing, toggle };
};
