export const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  FavoritesEmpty: '/favorites-empty',
  Offer: '/offer/:id',
  Root: '/',
  MainEmpty: '/main-empty',
  OfferNotLogged: '/offer-not-logged',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Settings = {
  authorizationStatus: AuthorizationStatus.Auth,
  favoritesCount: 3,
};
