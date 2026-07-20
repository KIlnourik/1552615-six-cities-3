import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {AxiosError, AxiosInstance} from 'axios';
import {ApiRoute, AuthStatus, Pages, TIMEOUT_SHOW_ERROR} from '../utils/const';
import { Offer } from '../types/offer';
import { loadOffers, requireAuthorization, setError, setOffersLoadingStatus, redirectToRoute } from './action';
import { User } from '../types/user';
import { Auth } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';


export const clearErrorAction = createAsyncThunk(
  'error/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;

  }
>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;

  }
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const { data: { token } } = await api.post<User>(ApiRoute.Login, { email, password });
      saveToken(token);
      dispatch(requireAuthorization(AuthStatus.Auth));
      dispatch(redirectToRoute(Pages.Main));
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const message = error instanceof AxiosError
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ? error.response?.data?.message ?? error.message
        : 'Неизвестная ошибка';

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      dispatch(setError(message));

      return rejectWithValue(message);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NoAuth));
  },
);
