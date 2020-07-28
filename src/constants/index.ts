export const API_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
export const WS_DOMAIN = process.env.REACT_APP_WEBSOCKET_DOMAIN;

export const CURRENT_RUN_ENVIRONMENT = process.env.NODE_ENV;

export enum RunEnvironment {
  TEST = 'test',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
