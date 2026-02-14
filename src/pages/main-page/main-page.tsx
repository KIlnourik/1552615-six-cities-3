import Card from '../../components/card';
import Header from '../../components/header';
import Locations from '../../components/locations';
import Map from '../../components/map';
import SortForm from '../../components/sort-form';

type Props = {
  offerCount: number;
};

export default function MainPage({ offerCount }: Props): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in Amsterdam</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                <Card parentClass='cities'/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map parentClass='cities__map'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


