import OffersList from '../offers-list/offers-list';

type Props = {
  onCardHover: (title: string) => void;
}

export default function MainOffersList(props: Props) {
  const { onCardHover} = props;
  return (
    <OffersList
      className='cities__places-list tabs__content'
      cardClassName='cities__card'
      onCardHover={onCardHover}
    />
  );
}
