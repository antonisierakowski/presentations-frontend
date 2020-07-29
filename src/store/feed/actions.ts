import { GET_FEED_CONNECTION } from './constants';
import { createAction } from '../utils';

export const getFeedConnection = () => createAction(GET_FEED_CONNECTION);
