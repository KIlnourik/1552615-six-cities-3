import { useState } from 'react';
import { Offer } from '../../types/offer';
import Card from '../card/card';

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
      <div className="favorites__places">
        {offers && offers.map((offer: Offer) => (
          <Card parentClass="favorites" offer={offer} key={`${offer.id}_${offer.price}`} onCardHover={onCardHover}/>
        ))}
      </div>
    </li>
  );
}
