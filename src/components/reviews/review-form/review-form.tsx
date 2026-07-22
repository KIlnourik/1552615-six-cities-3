import { SyntheticEvent, useState } from 'react';
import {getRatingArray} from '../../../utils/helpers.ts';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../../utils/const.ts';
import RatingInput from '../rating-input/rating-input.tsx';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {sendReviewAction} from '../../../store/api-actions.ts';
import {UserReview} from '../../../types/user-review.ts';

export default function ReviewForm(): JSX.Element {
  const offer = useAppSelector((state) => state.offer);
  const [review, setReview] = useState({
    'rating': 0,
    'review': ''
  });
  const [isValidReview, setIsValidReview] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleFieldChange = (evt: SyntheticEvent) => {
    const {name, value} = evt.target as HTMLInputElement;
    setReview({...review, [name]: value});

    if (review.rating > 0 &&
      (review.review.length >= MIN_REVIEW_LENGTH && review.review.length <= MAX_REVIEW_LENGTH)
    ) {
      setIsValidReview(true);
    }
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (isValidReview && offer !== null) {
      const userReview: UserReview = {
        comment: review.review,
        rating: review.rating,
        offerId: offer.id
      };
      dispatch(sendReviewAction(userReview));
    }
  };

  const ratingArray = getRatingArray();

  return (
    <form className="reviews__form form" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingArray.map((rating) =>
          <RatingInput rating={rating} handleFieldChange={handleFieldChange} key={`${offer?.id}_${rating}`} />
        )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValidReview}>Submit</button>
      </div>
    </form>
  );
}
