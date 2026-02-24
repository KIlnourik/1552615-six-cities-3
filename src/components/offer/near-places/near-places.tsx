import { Offer } from '../../../types/offer';
import OffersList from '../../offers-list/offers-list';

type Props = {
  offers: Offer[];
  onCardHover: (title: string) => void;
}

export default function NearPlaces(props: Props) {
  const {offers, onCardHover} = props;

  return (
    <OffersList
      className='near-places__list'
      cardClassName='near-places__card'
      offers={offers}
      onCardHover={onCardHover}
    />
  );
}
