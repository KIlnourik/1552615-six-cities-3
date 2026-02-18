import { Helmet } from 'react-helmet-async';
import Card from '../../components/card/card';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import { Offer } from '../../types/offer';

type Props = {
  offers: Offer[];
};

export default function MainPage({ offers }: Props): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers ? offers.length : 0} places to stay in Amsterdam</b>
            <SortForm />
            <div className="cities__places-list places__list tabs__content">
              {offers && offers.map((offer: Offer) => (<Card parentClass='cities' offer={offer} key={`${offer.id}_${offer.title}`}/>))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map parentClass='cities__map' />
          </div>
        </div>
      </div>
    </main>
  );
}


