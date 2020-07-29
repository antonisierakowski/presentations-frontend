import {
  PresentationDbRow,
  PresentationFileExtension,
} from '../../services/HttpClient/requests/types';
import { Presentation } from './model';
import { API_DOMAIN } from '../../constants';

export const mapPresentationDbRowToDomainEntity = (
  presentationRow: PresentationDbRow,
): Presentation => {
  const fileUrl = `${API_DOMAIN}/presentation/${presentationRow.id}`;
  return {
    id: presentationRow.id,
    currentSlide: presentationRow.current_slide,
    numberOfSlides: presentationRow.number_of_slides,
    fileType: presentationRow.file_type as PresentationFileExtension,
    fileUrl,
  };
};
