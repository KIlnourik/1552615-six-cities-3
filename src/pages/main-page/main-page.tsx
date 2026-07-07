import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import { Offer } from '../../types/offer';
import { useEffect, useState } from 'react';
import MainOffersList from '../../components/main-offers-list/main-offers-list';
import CitiesList from '../../components/cities-list/citites-list';
import { useAppSelector } from '../../hooks';
import { SortDirection } from '../../utils/const';
import { getSortBy} from '../../utils/helpers';


export default function MainPage(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const [isSortFormOpened, setSortFormOpened] = useState<boolean>(false);
  const [activeSort, setActiveSort] = useState<string>(SortDirection.Popular);
  const [sortedOffers, setSortedOffers] = useState<Offer[]|undefined>(undefined);

  const onCardHover = (title: string) => {
    const currentOffer = offers.find((offer) => offer.title === title);
    setSelectedOffer(currentOffer);
  };

  const onSortFormClick = () => {
    setSortFormOpened(!isSortFormOpened);
  };

  const onSortFormChange = (sortBy: string) => {
    setActiveSort(sortBy);
    setSortedOffers(getSortBy(offers, sortBy));
  };

  useEffect(() => {
    setSortedOffers(offers);
  }, [offers]);

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList />
      </div>
      <div className="cities">
        {sortedOffers && sortedOffers.length ?
          (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers ? sortedOffers.length : 0} places to stay in {currentCity.name}</b>
                <SortForm
                  activeSort={activeSort}
                  isSortFormOpened={isSortFormOpened}
                  onSortFormClick={onSortFormClick}
                  onSortFormChange={onSortFormChange}
                />
                <MainOffersList onCardHover={onCardHover} offers={sortedOffers}/>
              </section>
              <div className="cities__right-section" >
                <Map
                  parentClass='cities__map'
                  selectedOffer={selectedOffer}
                />
              </div>
            </div>) :
          (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
      </div>
    </main>
  );
}


