import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import { DEFAULT_CITY } from '../const';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';

const initialState = {
  city: DEFAULT_CITY,
  offers: [] as Offer[]
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = offers.filter((offer) => offer.city.name === action.payload.name);
    });
});
