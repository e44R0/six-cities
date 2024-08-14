import { Link } from 'react-router-dom';
import { Offer } from '../types/Offer';
import { getRating, classIncluded, createOfferLink } from '../utils';

type CardProps = {
  offer: Offer;
  onHover: (offerId: string) => void;
};

export const Card = ({ offer, onHover }: CardProps): JSX.Element => {
  // console.log('render card');

  const mouseOverHandler = () => {
    onHover(offer.id);
    // console.log('MouseOver >>', offer.id);
  };

  const mouseOutHandler = () => {
    // console.log('mouse out');
    onHover('');
  };

  return (
    <article
      className="cities__card place-card"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={createOfferLink(offer.id)}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classIncluded({
              'place-card__bookmark-button': true,
              button: true,
              'place-card__bookmark-button--active': offer.isFavorite,
            })}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating(offer.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={createOfferLink(offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};
