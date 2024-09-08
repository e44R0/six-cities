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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
  'Kondrovo',
];
