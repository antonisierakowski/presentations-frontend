import httpClient from '../index';
import { ApiResponse } from '../types';
import {
  PresentationResponse,
  PresentationWithMetadataResponse,
  SetPresentationCurrentSlideRequestBody,
} from './types';

export const postPresentation = async (
  file: Blob,
  fileName: string,
): Promise<ApiResponse<PresentationResponse>> => {
  const endpoint = '/presentation';
  const formData = new FormData();
  formData.append('presentation', file, fileName);
  const requestHeaders = {
    'Content-Type': `multipart/form-data;`,
  };
  return await httpClient.post(endpoint, formData, { headers: requestHeaders });
};

export const getPresentation = async (
  presentationId: string,
): Promise<ApiResponse<PresentationWithMetadataResponse>> => {
  const endpoint = '/presentation/%s/metadata'.replace('%s', presentationId);
  return await httpClient.get(endpoint);
};

export const setPresentationCurrentSlide = async (
  presentationId: string,
  body: SetPresentationCurrentSlideRequestBody,
): Promise<ApiResponse<PresentationResponse>> => {
  const endpoint = '/presentation/%s'.replace('%s', presentationId);
  return await httpClient.put(endpoint, body);
};

export const deletePresentation = async (
  presentationId: string,
): Promise<ApiResponse> => {
  const endpoint = '/presentation/%s'.replace('%s', presentationId);
  return await httpClient.delete(endpoint);
};
