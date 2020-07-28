export const API_DOMAIN = process.env.REACT_APP_BACKEND_BASE_URL;
export const WS_DOMAIN = process.env.REACT_APP_WEBSOCKET_BASE_URL;

export const CURRENT_RUN_ENVIRONMENT = process.env.NODE_ENV;

export enum RunEnvironment {
  TEST = 'test',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
