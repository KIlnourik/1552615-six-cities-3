import {Offer} from '../../../types/offer.ts';

type Props = {
  offer: Offer;
}

export default function Features({offer}: Props): JSX.Element {
  const firstLetter = offer.type[0].toUpperCase();

  const type = `${firstLetter}${offer.type.slice(1)}`;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {offer.bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {offer.maxAdults} adults
      </li>
    </ul>
  );
}
