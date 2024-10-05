import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../mocks/offers';
import { getCurrentCityOffers } from '../utils';
import { changeCity } from './action';

const initialState = {
  currentCity: 'Paris',
  offers: getCurrentCityOffers(Offers, 'Paris'),
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload.city;
    state.offers = getCurrentCityOffers(Offers, action.payload.city);
  });
});

// initialState
// reducer: (action, state) => newState

// dispatch(action)
// action: { type: "doSmth", payload: { x: 1}}
