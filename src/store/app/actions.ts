import { createAction } from '../utils';
import { INIT_ACTION } from './constants';

export const initAction = () => createAction(INIT_ACTION);
