import { API_DOMAIN } from '../../constants';
import * as Axios from 'axios';
import * as exceptions from './exceptions';
import { ApiResponse, StatusCode } from './types';

export class HttpClient {
  private static instance: HttpClient;
  private axiosInstance: Axios.AxiosInstance;

  private constructor() {
    this.axiosInstance = Axios.default.create({
      baseURL: API_DOMAIN,
    });
  }

  static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }

  private throwBasedOnStatusCode(response: Axios.AxiosResponse) {
    switch (response.status) {
      case StatusCode.OK: {
        return response;
      }
      case StatusCode.UNPROCESSABLE_ENTITY: {
        throw new exceptions.ApiValidationError();
      }
      case StatusCode.INTERNAL_ERROR:
      default: {
        throw new exceptions.ApiInternalError();
      }
    }
  }

  async post<TBody = any, TResponse = ApiResponse>(
    url: string,
    body?: TBody,
  ): Promise<TResponse> {
    try {
      const response = await this.axiosInstance.post(url, body);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new exceptions.NoApiResponseError();
      }
      this.throwBasedOnStatusCode(error.response);
    }
  }

  async get<TResponse = ApiResponse>(url: string): Promise<TResponse> {
    try {
      const response = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new exceptions.NoApiResponseError();
      }
      this.throwBasedOnStatusCode(error.response);
    }
  }

  async put<TBody = any, TResponse = ApiResponse>(
    url: string,
    body?: TBody,
  ): Promise<TResponse> {
    try {
      const response = await this.axiosInstance.put(url, body);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new exceptions.NoApiResponseError();
      }
      this.throwBasedOnStatusCode(error.response);
    }
  }

  async delete<TBody = any, TResponse = ApiResponse>(
    url: string,
    body?: TBody,
  ): Promise<TResponse> {
    try {
      const response = await this.axiosInstance.delete(url, body);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new exceptions.NoApiResponseError();
      }
      this.throwBasedOnStatusCode(error.response);
    }
  }
}

export default HttpClient.getInstance();
