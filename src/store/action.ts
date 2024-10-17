import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/Offer';

export const changeCity = createAction('changeCity', (city: string) => ({
  payload: { city },
}));

export const changeSortingType = createAction(
  'changeSortingType',
  (sortingType: string) => ({ payload: { sortingType } }),
);

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const changeDataLoadingStatus = createAction<boolean>(
  'changeDataLoadingStatus',
);
