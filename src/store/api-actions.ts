import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';
import { Offer } from '../types/Offer';
import { changeDataLoadingStatus, loadOffers } from './action';
// import { loadOffers, changeDataLoadingStatus } from './action';
// import {saveToken, dropToken} from '../services/token';
import { APIRoute } from '../const';
// import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
// import {AuthData} from '../types/auth-data';
// import {UserData} from '../types/user-data';
// import {store} from './';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(changeDataLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(changeDataLoadingStatus(false));
  dispatch(loadOffers(data));
});
