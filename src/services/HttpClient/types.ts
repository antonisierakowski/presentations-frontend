export enum StatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  RESOURCE_NOT_FOUND = 404,
  UNSUPPORTED_MEDIA_TYPE = 415,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_ERROR = 500,
}

export interface ApiResponse<TBody = any> {
  status: StatusCode;
  response: TBody;
}
