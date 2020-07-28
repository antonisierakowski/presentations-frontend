import { PresentationMetadata } from '../../../store/presentation/model';

export enum PresentationFileExtension {
  PPTX = '.pptx',
  PDF = '.pdf',
}

export interface PresentationResponse {
  presentation: {
    id: string;
    number_of_slides: number;
    current_slide: number;
    file_name: string;
    file_type: PresentationFileExtension;
  };
}

export interface PresentationWithMetadataResponse extends PresentationResponse {
  metadata: PresentationMetadata;
}
