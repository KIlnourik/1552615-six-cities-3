import { Offer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';

type Props = {
  offers: Offer[];
  onCardHover: (title: string) => void;
}

export default function MainOffersList({offers, onCardHover}: Props) {
  return (
    <OffersList
      className='cities__places-list tabs__content'
      offers={offers}
      cardClassName='cities__card'
      onCardHover={onCardHover}
    />
  );
}
