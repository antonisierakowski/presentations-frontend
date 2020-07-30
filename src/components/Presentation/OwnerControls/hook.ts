import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import { useCallback } from 'react';
import {
  decrementCurrentSlide,
  incrementCurrentSlide,
  removePresentation,
} from '../../../store/presentation/actions';
import {
  canDecrementSlide,
  canIncrementSlide,
} from '../../../store/presentation/selectors';
import { isUserCurrentPresentationOwner } from '../../../store/user/selectors';

interface UsePresentationControlsHook {
  canDecrement: boolean;
  canIncrement: boolean;
  isPresentationOwner: boolean;

  onDecrementSlide: () => void;
  onIncrementSlide: () => void;
  onRemovePresentation: () => void;
}

export const usePresentationControls = (): UsePresentationControlsHook => {
  const canDecrement = useSelector((state: RootState) =>
    canDecrementSlide(state),
  );

  const canIncrement = useSelector((state: RootState) =>
    canIncrementSlide(state),
  );

  const isPresentationOwner = useSelector((state: RootState) =>
    isUserCurrentPresentationOwner(state),
  );

  const dispatch = useDispatch();

  const onDecrementSlide = useCallback(() => {
    dispatch(decrementCurrentSlide());
  }, [dispatch]);

  const onIncrementSlide = useCallback(() => {
    dispatch(incrementCurrentSlide());
  }, [dispatch]);

  const onRemovePresentation = useCallback(() => {
    dispatch(removePresentation());
  }, [dispatch]);

  return {
    canDecrement,
    canIncrement,
    isPresentationOwner,

    onDecrementSlide,
    onIncrementSlide,
    onRemovePresentation,
  };
};
