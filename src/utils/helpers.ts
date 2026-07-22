import { City, Offer } from '../types/offer';
import {MAX_RATING_VALUE, MIN_RATING_VALUE, SortDirection} from './const';
import {AxiosError} from 'axios';
import {ApiErrorResponse} from '../types/state.ts';

export const sortByPriceAsc = (a: Offer, b: Offer) => {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  return 0;
};

export const sortByPriceDesc = (a: Offer, b: Offer) => {
  if (a.price < b.price) {
    return 1;
  }
  if (a.price > b.price) {
    return -1;
  }
  return 0;
};

export const sortByRatingDesc = (a: Offer, b: Offer) => {
  if (a.rating < b.rating) {
    return 1;
  }
  if (a.rating > b.rating) {
    return -1;
  }
  return 0;
};

export const getSortBy = (offers: Offer[], sortBy: string): Offer[] => {
  switch (sortBy) {
    case (SortDirection.Popular):
      return offers;
    case (SortDirection.PriceAsc):
      return offers.toSorted(sortByPriceAsc);
    case (SortDirection.PriceDesc):
      return offers.toSorted(sortByPriceDesc);
    case (SortDirection.RatingDesc):
      return offers.toSorted(sortByRatingDesc);
  }
  return offers;
};

export const getRating = (rating: number) => (rating * 100) / 5;

export const getOffersByCity = (city: City, offers: Offer[]) =>
  offers.filter((offer: Offer) => offer.city.name === city.name);

export const getRatingArray = () => {
  const numbers = [];
  for (let i = MIN_RATING_VALUE; i <= MAX_RATING_VALUE; ++i) {
    numbers.push(i);
  }
  return numbers.reverse();
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const data = error.response?.data as ApiErrorResponse | undefined;
    return `${data?.message}: ${data?.details.join('; ')}` ?? error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Неизвестная ошибка';
};
