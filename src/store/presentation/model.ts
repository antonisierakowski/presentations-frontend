import { PresentationFileExtension } from '../../services/HttpClient/requests/types';

export interface Presentation {
  id: string;
  currentSlide: number;
  numberOfSlides: number;
  fileUrl: string;
  fileType: PresentationFileExtension;
}

export interface PresentationMetadata {
  isCurrentUserPresentationOwner: boolean;
}
