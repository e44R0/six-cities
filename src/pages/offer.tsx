import { Header } from '../components/header/header';
import { OfferPhoto } from '../components/offers/offer-photo';
import { NearPlaces } from '../components/near-places';
import { city, Offers } from '../mocks/offers';
import { Map } from '../components/map/map';
import { Offer } from '../mocks/offer';
import { GoodsListItem } from '../components/offers/features-list-item';
import { classIncluded, getRating } from '../utils';
import { OfferReviews } from '../components/offers/offer-reviews';
import { Comments } from '../mocks/comments';

export const OfferPage = (): JSX.Element => {
  console.log('render OfferPage');
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {Offer.images.map((image) => (
                <OfferPhoto key={image} imageSrc={image} />
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {Offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{Offer.title}</h1>
                <button
                  className={classIncluded({
                    'offer__bookmark-button': true,
                    button: true,
                    'offer__bookmark-button--active': Offer.isFavorite,
                  })}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${getRating(Offer.rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {Offer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {Offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {Offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {Offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{Offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {Offer.goods.map((goodsItem) => (
                    <GoodsListItem key={goodsItem} featureItem={goodsItem} />
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={classIncluded({
                      'offer__avatar-wrapper': true,
                      'user__avatar-wrapper': true,
                      'offer__avatar-wrapper--pro': Offer.host.isPro,
                    })}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={Offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{Offer.host.name}</span>
                  {Offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{Offer.description}</p>
                </div>
              </div>
              <OfferReviews comments={Comments} />
            </div>
          </div>
          <Map
            offers={[...Offers.slice(1, 4), Offer]}
            city={city}
            selectedOffer={Offer.id}
            className={'offer__map'}
          />
        </section>
        <div className="container">
          <NearPlaces offers={Offers} />
        </div>
      </main>
    </div>
  );
};
