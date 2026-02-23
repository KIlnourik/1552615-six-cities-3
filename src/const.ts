export enum Pages {
  Main = '/',
  Login = 'login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
  NotFound = '*'
}

export enum PageClassNames {
  Main = 'page--gray page--main',
  Login = 'page--gray page--login'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
