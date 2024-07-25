export const Settings = {
  cardCount: 5,
};

export const SourceIMG = {};

// ^ корректный список взять с ТЗ -_-

export const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  FavoritesEmpty: '/favorites-empty',
  Offer: '/offer',
  Root: '/',
  MainEmpty: '/main-empty',
  OfferNotLogged: '/offer-not-logged',
} as const;

// export const AuthorizationStatus = {
//   Auth: 'AUTH',
//   NoAuth: 'NO_AUTH',
//   Unknown: 'UNKNOWN',
// };

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
