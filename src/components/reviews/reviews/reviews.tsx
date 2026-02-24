import { Review } from '../../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

type Props = {
  reviews: Review[];
}

export default function Reviews({ reviews }: Props): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}
