import httpClient from '../index';

export const postPresentation = async (file: ArrayBuffer) => {
  // todo type?
  const endpoint = '/presentation';
  return await httpClient.post(endpoint, file); // todo body and type
};

export const getPresentation = async (presentationId: string) => {
  const endpoint = '/presentation/%s/metadata'.replace('%s', presentationId);
  return await httpClient.get(endpoint); // todo response type
};

export const setPresentationCurrentSlide = async (
  presentationId: string,
  body: any,
) => {
  // todo type
  const endpoint = '/presentation/%s'.replace('%s', presentationId);
  return await httpClient.put(endpoint, body); // todo body and response type
};

export const deletePresentation = async (presentationId: string) => {
  const endpoint = '/presentation/%s'.replace('%s', presentationId);
  return await httpClient.delete(endpoint); // todo response type
};
