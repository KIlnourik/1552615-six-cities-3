import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offer';

export const changeCity = createAction<City>('city/changeCity');
export const setOffers = createAction<City>('offer/setOffers');

