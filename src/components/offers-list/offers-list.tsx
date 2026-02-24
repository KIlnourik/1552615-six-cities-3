import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type Props = {
  className: string;
  cardClassName: string;
  offers: Offer[];
  onCardHover: (title: string) => void;
}

export default function OffersList({className, cardClassName, offers, onCardHover}: Props) {
  return (
    <div className={`${className} places__list`}>
      {offers && offers.map((offer: Offer) => (
        <OfferCard cardClassName={cardClassName} offer={offer} key={`${offer.id}-${offer.title}`} onCardHover={onCardHover} />
      ))}
    </div>
  );
}
