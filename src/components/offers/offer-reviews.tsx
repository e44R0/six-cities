import { ReviewForm } from '../review-form';
import { OfferReviewsItem } from './offer-reviews-item';
import { Comment } from '../../types/Offer';

type CommentsProps = {
  comments: Comment[];
};

export const OfferReviews = (props: CommentsProps) => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews &middot;
      <span className="reviews__amount">{props.comments.length}</span>
    </h2>
    <ul className="reviews__list">
      {props.comments.map((comment) => (
        <OfferReviewsItem key={comment.id} comment={comment} />
      ))}
    </ul>
    <ReviewForm />
  </section>
);
