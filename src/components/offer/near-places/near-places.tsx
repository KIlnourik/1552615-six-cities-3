import OffersList from '../../offers-list/offers-list';

type Props = {
  onCardHover: (title: string) => void;
}

export default function NearPlaces(props: Props) {
  const {onCardHover} = props;

  return (
    <OffersList
      className='near-places__list'
      cardClassName='near-places__card'
      onCardHover={onCardHover}
    />
  );
}
