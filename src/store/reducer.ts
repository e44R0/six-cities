import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortingType, loadOffers } from './action';
import { Offer } from '../types/Offer';

const initialState = {
  currentCity: 'Paris',
  offers: [] as Offer[],
  sortingType: 'Popular',
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload.sortingType;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

// initialState
// reducer: (action, state) => newState

// dispatch(action)
// action: { type: "doSmth", payload: { x: 1}}
