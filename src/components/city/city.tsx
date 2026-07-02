import { SyntheticEvent } from 'react';
import { City as CityType } from '../../types/offer';
import { useAppSelector } from '../../hooks';

type Props = {
  city: CityType;
  onCityClick: (cityName: string) => void;
}

export default function City(props: Props) {
  const currentCity = useAppSelector((state) => state.city);

  const { city, onCityClick } = props;

  const handleCityClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    onCityClick(city.name);
  };

  const classNames = () => {
    const base = 'locations__item-link tabs__item';

    return (city.name === currentCity.name) ?
      `${base} tabs__item--active` :
      base;
  };

  return (
    <li className="locations__item">
      <a className={classNames()} href="#" onClick={handleCityClick}>
        <span>{city.name}</span>
      </a>
    </li>
  );
}
