import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeDataLoadingStatus,
  changeSortingType,
  loadNearbyOffers,
  loadOffer,
  loadOfferError,
  loadOffers,
  requireAuthorization,
  loadComments,
  addNewComment,
} from './action';
import { FullOffer, Offer, Comment } from '../types/Offer';
import { AuthorizationStatus } from '../const';

const initialState = {
  currentCity: 'Paris',
  offers: [] as Offer[],
  fulloffer: null as unknown as FullOffer,
  loadOfferError: null as unknown as Error,
  sortingType: 'Popular',
  loadingStatus: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  nearbyOffers: [] as Offer[],
  comments: [] as Comment[],
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
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(addNewComment, (state, action) => {
      state.comments.push(action.payload);
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
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
