import { Offer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';

type Props = {
  offers: Offer[];
  onCardHover: (title: string) => void;
}

export default function MainOffersList(props: Props) {
  const {offers, onCardHover} = props;
  return (
    <OffersList
      className='cities__places-list tabs__content'
      cardClassName='cities__card'
      offers={offers}
      onCardHover={onCardHover}
    />
  );
}
