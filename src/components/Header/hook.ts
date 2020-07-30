import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { selectCurrentPath } from '../../store/app/selectors';
import { useCallback } from 'react';

interface UseHeaderHook {
  isOnIndexPage: boolean;

  onCopy: () => void;
}

export const useHeader = (): UseHeaderHook => {
  const currentRoute = useSelector((state: RootState) =>
    selectCurrentPath(state),
  );
  const isOnIndexPage = currentRoute === '/';

  const currentUrl = window.location.href;
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(currentUrl);
  }, [currentUrl]);

  return {
    isOnIndexPage,
    onCopy,
  };
};
