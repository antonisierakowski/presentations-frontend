export interface Presentation {
  id: string;
  currentSlide: number;
  numberOfSlides: number;
  fileUrl: string;
}

export interface PresentationMetadata {
  isCurrentUserPresentationOwner: boolean;
}
