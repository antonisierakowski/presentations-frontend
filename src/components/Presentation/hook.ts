import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import {
  selectCurrentPresentationMaxSlides,
  selectCurrentPresentationUrl,
  selectCurrentSlideNumber,
  selectIsCurrentPresentationLoading,
} from '../../store/presentation/selectors';
import { useEffect } from 'react';
import { getPresentation } from '../../store/presentation/actions';
import { selectPresentationIdFromPath } from '../../store/app/selectors';

interface UsePresentationHook {
  isPresentationLoading: boolean;
  presentationUrl: string;
  currentSlide: number;
  maxSlides: number;
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
  const maxSlides = useSelector((state: RootState) =>
    selectCurrentPresentationMaxSlides(state),
  );
  const currentIdFromPath = useSelector((state: RootState) =>
    selectPresentationIdFromPath(state),
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPresentation({ presentationId: currentIdFromPath }));
  }, [currentIdFromPath, dispatch]);

  return {
    isPresentationLoading,
    presentationUrl,
    currentSlide,
    maxSlides,
  };
};
