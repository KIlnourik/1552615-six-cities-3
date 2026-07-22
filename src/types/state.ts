import { store } from '../store';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ApiErrorResponse {
  message: string;
  details: string[];
}
