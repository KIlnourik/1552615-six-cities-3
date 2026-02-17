import { Review } from '../../types/review';
import ReviewForm from './review-form';
import ReviewList from './review-list';

type Props = {
  reviews: Review[];
}

export default function Reviews({ reviews }: Props): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}
