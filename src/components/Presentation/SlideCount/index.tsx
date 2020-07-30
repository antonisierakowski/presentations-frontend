import styles from './styles.module.css';
import { Badge, Chip } from '@material-ui/core';
import { usePresentation } from '../hook';
import React from 'react';

export const SlideCount: React.FC = (): React.ReactElement => {
  const { currentSlide, maxSlides } = usePresentation();

  if (currentSlide && maxSlides) {
    return (
      <Chip
        className={styles.slideCount}
        color="secondary"
        label={`${currentSlide}/${maxSlides}`}
      />
    );
  }

  return null;
};
