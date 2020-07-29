import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import {
  selectCurrentPresentationUrl,
  selectCurrentSlideNumber,
  selectIsCurrentPresentationLoading,
} from '../../store/presentation/selectors';

interface UsePresentationHook {
  isPresentationLoading: boolean;
  presentationUrl: string;
  currentSlide: number;
}

export const usePresentation = (): UsePresentationHook => {
  const isPresentationLoading = useSelector((state: RootState) =>
    selectIsCurrentPresentationLoading(state),
  );
  const presentationUrl = useSelector((state: RootState) =>
    selectCurrentPresentationUrl(state),
  );
  const currentSlide = useSelector((state: RootState) =>
    selectCurrentSlideNumber(state),
  );

  return {
    isPresentationLoading,
    presentationUrl,
    currentSlide,
  };
};
