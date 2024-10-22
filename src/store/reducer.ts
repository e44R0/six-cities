import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeDataLoadingStatus,
  changeSortingType,
  loadOffers,
  requireAuthorization,
} from './action';
import { Offer } from '../types/Offer';
import { AuthorizationStatus } from '../const';

const initialState = {
  currentCity: 'Paris',
  offers: [] as Offer[],
  sortingType: 'Popular',
  loadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(changeDataLoadingStatus, (state, action) => {
      state.loadingStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

// initialState
// reducer: (action, state) => newState

// dispatch(action)
// action: { type: "doSmth", payload: { x: 1}}
