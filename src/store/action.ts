import { createAction } from '@reduxjs/toolkit';
import { FullOffer, Offer, Comment } from '../types/Offer';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('changeCity', (city: string) => ({
  payload: { city },
}));

export const changeSortingType = createAction(
  'changeSortingType',
  (sortingType: string) => ({ payload: { sortingType } }),
);

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadOfferError = createAction<Error>('data/loadOfferError');

export const changeDataLoadingStatus = createAction<boolean>(
  'changeDataLoadingStatus',
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'requireAuthorization',
);

export const loadOffer = createAction<FullOffer>('data/loadOffer');

export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');

export const loadComments = createAction<Comment[]>('data/loadComments');
