import { Offer } from '../../../types/offer';
import OffersList from '../../offers-list/offers-list';

type Props = {
  offers: Offer[];
  onCardHover: (title: string) => void;
}

export default function FavoritePlaces(props: Props) {
  const {offers, onCardHover} = props;

  return (
    <OffersList
      className='favorites__places'
      cardClassName='favorites__card'
      offers={offers}
      onCardHover={onCardHover}
    />
  );
}
