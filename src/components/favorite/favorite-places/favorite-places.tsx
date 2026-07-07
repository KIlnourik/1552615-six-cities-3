import { useAppSelector } from '../../../hooks';
import OffersList from '../../offers-list/offers-list';

type Props = {
  onCardHover: (title: string) => void;
}

export default function FavoritePlaces(props: Props) {
  const {onCardHover} = props;
  const offers = useAppSelector((state) => state.offers);


  return (
    <OffersList
      offers={offers}
      className='favorites__places'
      cardClassName='favorites__card'
      onCardHover={onCardHover}
    />
  );
}
