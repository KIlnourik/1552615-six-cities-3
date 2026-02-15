import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo.tsx';

export default function FavoritePage(): JSX.Element {
  return (
    <Fragment>
      <Helmet >
        <title>6 cities: favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo />
      </footer>
    </Fragment>
  );
}
