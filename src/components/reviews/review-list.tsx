import { Review } from '../../types/review';
import ReviewItem from './review';

type Props = {
  reviews: Review[];
}

export default function ReviewList({reviews}: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews && reviews.map((review: Review) => (<ReviewItem review={review} key={review.id}/>))}
    </ul>
  );
}
