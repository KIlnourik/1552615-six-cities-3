import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type Props = {
  className: string;
  cardClassName: string;
  onCardHover: (title: string) => void;
}

export default function OffersList({className, cardClassName, onCardHover}: Props) {
  const offers = useAppSelector((state) => state.offers);

  return (
    <div className={`${className} places__list`}>
      {offers && offers.map((offer: Offer) => (
        <OfferCard cardClassName={cardClassName} offer={offer} key={`${offer.id}-${offer.title}`} onCardHover={onCardHover} />
      ))}
    </div>
  );
}
