import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo.tsx';
import { Offer } from '../../types/offer.ts';
import FavoriteList from '../../components/favorite/favorite-list/favorite-list.tsx';

type Props = {
  offers: Offer[];
};

export default function FavoritePage({ offers }: Props): JSX.Element {
  return (
    <Fragment>
      <Helmet >
        <title>6 cities: favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo />
      </footer>
    </Fragment>
  );
}
