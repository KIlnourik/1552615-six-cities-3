
import { useEffect } from 'react';
import { CITIES, DEFAULT_CITY } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity, setOffers } from '../../store/action';
import City from '../city/city';

export default function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();

  const onCityClick = (cityName: string) => {
    const chosenCity = CITIES.find((city) => city.name === cityName) ?? DEFAULT_CITY;

    dispatch(changeCity(chosenCity));
    dispatch(setOffers(chosenCity));
  };

  useEffect(() => {
    dispatch(setOffers(DEFAULT_CITY));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <City
            key={`${city.name}_${city.location.latitude}`}
            city={city}
            onCityClick={onCityClick}
          />
        ))}
      </ul>
    </section>
  );
}
