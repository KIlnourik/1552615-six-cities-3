import Main from '../../pages/main-page/main-page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AuthStatus, Pages } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type Props = {
  offers: Offer[];
  reviews: Review[];
};

export default function App(props: Props): JSX.Element {
  const {offers, reviews} = props;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Pages.Main} element={<Layout />}>
            <Route index element={<Main offers={offers} />} />
            <Route path={Pages.Login} element={<LoginPage />} />
            <Route path={Pages.Favorites}
              element={
                <PrivateRoute authStatus={AuthStatus.Auth}>
                  <FavoritePage offers={offers}/>
                </PrivateRoute>
              }
            />
            <Route path={Pages.Offer} element={<OfferPage offers={offers} reviews={reviews}/>} />
            <Route path={Pages.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>


  );
}
