import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthStatus } from '../utils/const';
import { Review } from '../types/review';

export const changeCity = createAction<City>('city/changeCity');
export const loadOffers = createAction<Offer[]>('offer/loadOffers');
export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
export const loadSingleOffer = createAction<Offer|null>('offer/loadSingleOffer');
export const setSingleOfferLoadingStatus = createAction<boolean>('offers/setSingleOfferLoadingStatus');
export const loadReviews = createAction<Review[]>('review/loadReviews');
export const setReviewsLoadingStatus = createAction<boolean>('offers/setReviewsLoadingStatus');
export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
export const loadNearOffers = createAction<Offer[]>('offer/loadNearOffers');
export const setNearOffersLoadingStatus = createAction<boolean>('offers/setNearOffersLoadingStatus');
export const setError = createAction<string | null>('error/setError');
export const redirectToRoute = createAction<string>('data/redirectToRoute');
