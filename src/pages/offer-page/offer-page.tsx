import Facilities from '../../components/offer/facilities';
import Features from '../../components/offer/features';
import Gallery from '../../components/gallery/gallery';
import Host from '../../components/offer/host';
import NearPlaces from '../../components/offer/near-places';
import Reviews from '../../components/reviews/reviews';
import Rating from '../../components/offer/rating';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';

export default function OfferPage(): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <Gallery />
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                Beautiful &amp; luxurious studio at great location
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating />
            <Features />
            <div className="offer__price">
              <b className="offer__price-value">&euro;120</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <Facilities />
            <Host />
            <Reviews />
          </div>
        </div>
        <Map parentClass='offer__map' />
      </section>
      <div className="container">
        <NearPlaces />
      </div>
    </main>
  );
}
