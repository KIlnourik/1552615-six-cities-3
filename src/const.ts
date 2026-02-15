export const offerCount = 5;

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
