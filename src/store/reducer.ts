import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeDataLoadingStatus,
  changeSortingType,
  loadOffer,
  loadOfferError,
  loadOffers,
  requireAuthorization,
} from './action';
import { FullOffer, Offer } from '../types/Offer';
import { AuthorizationStatus } from '../const';

const initialState = {
  currentCity: 'Paris',
  offers: [] as Offer[],
  fulloffer: null as unknown as FullOffer,
  loadOfferError: null as unknown as Error,
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
    .addCase(loadOffer, (state, action) => {
      state.fulloffer = action.payload;
    })
    .addCase(loadOfferError, (state, action) => {
      state.loadOfferError = action.payload;
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
