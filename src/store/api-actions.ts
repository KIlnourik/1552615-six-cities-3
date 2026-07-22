import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {AxiosInstance} from 'axios';
import {ApiRoute, AuthStatus, Pages, TIMEOUT_SHOW_ERROR} from '../utils/const';
import { Offer } from '../types/offer';
import {
  loadOffers, requireAuthorization, setError, setOffersLoadingStatus, redirectToRoute,
  setSingleOfferLoadingStatus, loadSingleOffer, setReviewsLoadingStatus, loadReviews, setNearOffersLoadingStatus,
  loadNearOffers
} from './action';
import { User } from '../types/user';
import { Auth } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import {Review} from '../types/review.ts';
import {UserReview} from '../types/user-review.ts';
import {getErrorMessage} from '../utils/helpers.ts';


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

export const fetchSingleOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offers/fetchSingleOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setSingleOfferLoadingStatus(true));
    const {data} = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(setSingleOfferLoadingStatus(false));
    dispatch(loadSingleOffer(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'reviews/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));
    const {data} = await api.get<Review[]>(`${ApiRoute.Reviews}/${offerId}`);
    dispatch(setReviewsLoadingStatus(false));
    dispatch(loadReviews(data));
  }
);

export const fetchNearOffersAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;

  }
>(
  'offers/fetchNearOffers',
  async (id, {dispatch, extra: api}) => {
    dispatch(setNearOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);
    dispatch(setNearOffersLoadingStatus(false));
    dispatch(loadNearOffers(data));
  }
);

export const sendReviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/sendReview',
  async ({ comment, rating, offerId }, {dispatch, extra: api, rejectWithValue }) => {
    try {
      rating = parseInt(String(rating), 10);
      await api.post<UserReview>(`${ApiRoute.Reviews}/${offerId}`, { comment, rating });
      dispatch(redirectToRoute(`${ApiRoute.Offers}/${offerId}`));
    } catch (error) {
      const message = getErrorMessage(error);
      dispatch(setError(message));
      return rejectWithValue(message);
    }
  },
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
      const message = getErrorMessage(error);
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
