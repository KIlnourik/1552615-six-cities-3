import { Offer } from '../../../types/offer';
import FavoriteItem from '../favorite-item/favorite-item';

type Props = {
  offers: Offer[];
};

export default function FavoriteList({ offers }: Props): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoriteItem offers={offers} />
    </ul>
  );
}
