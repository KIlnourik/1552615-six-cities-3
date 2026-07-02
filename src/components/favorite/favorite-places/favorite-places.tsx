import OffersList from '../../offers-list/offers-list';

type Props = {
  onCardHover: (title: string) => void;
}

export default function FavoritePlaces(props: Props) {
  const {onCardHover} = props;

  return (
    <OffersList
      className='favorites__places'
      cardClassName='favorites__card'
      onCardHover={onCardHover}
    />
  );
}
