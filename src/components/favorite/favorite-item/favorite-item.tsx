import { useState } from 'react';
import { Offer } from '../../../types/offer';
import FavoritePlaces from '../favorite-places/favorite-places';

type Props = {
  offers: Offer[];
}

export default function FavoriteItem({ offers }: Props): JSX.Element {
  const [, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onCardHover = (title: string) => {
    const currentOffer = offers.find((offer) => offer.title === title);

    setSelectedOffer(currentOffer);
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <FavoritePlaces offers={offers} onCardHover={onCardHover} />
    </li>
  );
}
