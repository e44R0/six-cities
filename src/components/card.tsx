import { Offer } from '../types/Offer';

type CardProps = {
  offer: Offer;
};

const cx = (classNames: { [key: string]: boolean }) => {
  // Object.keys
  // [].join(' ')
  return '... ... ...';
};

export const Card = ({ offer }: CardProps) => {
  console.log('render card');

  return (
    <article className="cities__card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            // className={cx({
            //   'place-card__bookmark-button': true,
            //   button: true,
            //   'place-card__bookmark-button--active': offer.isFavorite,
            // })}
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
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};