import { WS_DOMAIN } from '../../constants';
import { FeedHandlerCallback } from './types';

export class FeedClient {
  private wsConnection: WebSocket;

  constructor(channelId: string) {
    const url = `${WS_DOMAIN}/${channelId}`;
    this.wsConnection = new WebSocket(url);
  }

  listen<TData = any>(cb: FeedHandlerCallback): void {
    this.wsConnection.onmessage = function (message: MessageEvent): void {
      const { data } = message;
      const parsedData: TData = JSON.parse(data);
      cb(parsedData);
    };
  }
}
