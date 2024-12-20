import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';
import {
  FullOffer,
  Offer,
  Comment,
  CommentData,
  FavoritePatch,
} from '../types/Offer';
import {
  changeDataLoadingStatus,
  loadOffer,
  loadOffers,
  loadOfferError,
  requireAuthorization,
  loadNearbyOffers,
  loadComments,
  addNewComment,
  setFavorite,
  getUserInfo,
} from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

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
  const { data } = await api.get<Offer[]>(APIRoute.Offers());
  dispatch(changeDataLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const {
      data: { name, avatarUrl, isPro, email: userEmail, token },
    } = await api.get<UserData>(APIRoute.Login());
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getUserInfo({ name, avatarUrl, isPro, email: userEmail, token }));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { name, avatarUrl, isPro, email: userEmail, token },
    } = await api.post<UserData>(APIRoute.Login(), { email, password });
    saveToken(token);
    dispatch(getUserInfo({ name, avatarUrl, isPro, email: userEmail, token }));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    // dispatch(redirectToRoute(AppRoute.Result));
  },
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout());
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const fetchFullOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchFullOffer', async (id, { dispatch, extra: api }) => {
  dispatch(changeDataLoadingStatus(true));

  try {
    const { data: fullOffer } = await api.get<FullOffer>(APIRoute.Offer(id));
    const { data: nearbyOffers } = await api.get<Offer[]>(APIRoute.Nearby(id));
    const { data: comments } = await api.get<Comment[]>(APIRoute.Comments(id));
    dispatch(loadOffer(fullOffer));
    dispatch(loadNearbyOffers(nearbyOffers));
    dispatch(loadComments(comments));
  } catch (error) {
    dispatch(loadOfferError(error as Error));
  } finally {
    dispatch(changeDataLoadingStatus(false));
  }
});

export const sendCommentAction = createAsyncThunk<
  void,
  CommentData,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/sendComment',
  async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<unknown>(APIRoute.Comments(offerId), {
      comment,
      rating,
    });
    console.log('comment:', data);
    if (data) {
      dispatch(addNewComment(data as Comment));
    }
  },
);

export const updateFavorite = createAsyncThunk<
  void,
  FavoritePatch,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/updateFavorite',
  async ({ offerId, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<Offer>(
      APIRoute.UdateFavorite(offerId, status),
    );
    console.log('offer:', data);
    if (data) {
      dispatch(setFavorite(data));
    }
  },
);
