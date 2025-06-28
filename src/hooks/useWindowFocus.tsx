import { useEffect, useState } from 'react';

export const useWindowFocus = ({
  onFocus,
  onBlur,
  onFocusChange,
}: {
  onFocus?: () => void;
  onBlur?: () => void;
  onFocusChange?: (isFocused: boolean) => void;
}) => {
  const [isFocused, setIsFocused] = useState(true);
  useEffect(() => {
    const handleFocus = () => {
      console.log('Window focused');
      setIsFocused(true);
      onFocus?.();
      onFocusChange?.(true);
    };
    const handleBlur = () => {
      console.log('Window blurred');
      setIsFocused(false);
      onBlur?.();
      onFocusChange?.(false);
    };
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);
  return { isFocused };
};
