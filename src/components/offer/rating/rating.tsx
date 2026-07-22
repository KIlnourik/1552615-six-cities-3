import {getRating} from '../../../utils/helpers.ts';

type Props = {
  rating: number;
}

export default function Rating({rating}: Props): JSX.Element {
  const formattedRating = getRating(rating);

  return (
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width: `${formattedRating}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">4.8</span>
    </div>
  );
}
