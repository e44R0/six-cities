import { Comment } from '../../types/Offer';
import { getRating, getShortDate, getShortStringDate } from '../../utils';

type OfferReviewsItemProps = {
  comment: Comment;
};

export const OfferReviewsItem = (props: OfferReviewsItemProps) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={props.comment.user.avatarUrl}
          width="54"
          height="54"
          alt="Reviews avatar"
        />
      </div>
      <span className="reviews__user-name">{props.comment.user.name}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: `${getRating(props.comment.rating)}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">{props.comment.comment}</p>
      <time
        className="reviews__time"
        dateTime={getShortDate(props.comment.date)}
      >
        {getShortStringDate(props.comment.date)}
      </time>
    </div>
  </li>
);
