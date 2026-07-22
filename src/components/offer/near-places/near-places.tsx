import {useAppSelector} from '../../../hooks';
import OffersList from '../../offers-list/offers-list';

type Props = {
  onCardHover: (title: string) => void;
}

export default function NearPlaces({onCardHover}: Props) {
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const isNearOffersLoading = useAppSelector((state) => state.isNearOffersLoading);

  return (
    (!isNearOffersLoading) &&
      <OffersList
        offers={nearOffers}
        className='near-places__list'
        cardClassName='near-places__card'
        onCardHover={onCardHover}
      />
  );
}
