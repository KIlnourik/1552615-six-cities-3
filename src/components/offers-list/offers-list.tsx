import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type Props = {
  offers: Offer[];
  className: string;
  cardClassName: string;
  onCardHover: (title: string) => void;
}

export default function OffersList({offers, className, cardClassName, onCardHover}: Props) {
  return (
    <div className={`${className} places__list`}>
      {offers && offers.map((offer: Offer) => (
        <OfferCard cardClassName={cardClassName} offer={offer} key={`${offer.id}-${offer.title}`} onCardHover={onCardHover} />
      ))}
    </div>
  );
}
