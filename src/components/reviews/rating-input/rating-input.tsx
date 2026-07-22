import {SyntheticEvent} from 'react';

type Props = {
  rating: number;
  handleFieldChange: (evt: SyntheticEvent) => void;
}

export default function RatingInput({rating, handleFieldChange}: Props) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={handleFieldChange}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
