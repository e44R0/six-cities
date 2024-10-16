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

export const URL_MARKER_DEFAULT = 'public/img/pin.svg';

export const URL_MARKER_CURRENT = 'public/img/pin-active.svg';

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const Filters = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}
