import { Helmet } from 'react-helmet-async';
import Card from '../../components/card/card';
import Locations from '../../components/locations/locations';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import { City, Offer } from '../../types/offer';
import { useState } from 'react';

type Props = {
  offers: Offer[];
};

export default function MainPage({ offers }: Props): JSX.Element {
  const currentCity: City = {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 10
    }
  };

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onCardHover = (title: string) => {
    const currentOffer = offers.find((offer) => offer.title === title);

    setSelectedOffer(currentOffer);
  };

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
              {offers && offers.map((offer: Offer) => (
                <Card parentClass='cities' offer={offer} key={`${offer.id}-${offer.title}`} onCardHover={onCardHover}/>
              ))}
            </div>
          </section>
          <div className="cities__right-section" >
            <Map parentClass='cities__map'
              city={currentCity}
              offers={offers ?? null}
              selectedOffer={selectedOffer}
            />
          </div>
        </div>
      </div>
    </main>
  );
}


