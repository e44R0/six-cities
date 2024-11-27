import { Header } from '../components/header/header';
import { OfferPhoto } from '../components/offers/offer-photo';
import { NearPlaces } from '../components/near-places';
import { city } from '../mocks/offers';
import { Map } from '../components/map/map';
// import { Offer } from '../mocks/offer';
import { GoodsListItem } from '../components/offers/features-list-item';
import { classIncluded, getRating } from '../utils';
import { OfferReviews } from '../components/offers/offer-reviews';
import { useParams } from 'react-router-dom';
import { RootState, store } from '../store/store';
import { fetchFullOfferAction } from '../store/api-actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { LoadSpinner } from '../components/load-spinner';
import { NotFoundPage } from './page-not-found';

export const OfferPage = (): JSX.Element => {
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      store.dispatch(fetchFullOfferAction(params.id));
    }
  }, [params.id]);

  const loadingStatus = useSelector((state: RootState) => state.loadingStatus);
  const loadOfferError = useSelector(
    (state: RootState) => state.loadOfferError,
  );
  const nearbyOffers = useSelector((state: RootState) => state.nearbyOffers);
  const Comments = useSelector((state: RootState) => state.comments);

  const offer = useSelector((state: RootState) => state.fulloffer);
  console.log('fulloffer:', offer);
  console.log('loadingStatus:', loadingStatus);

  if (offer === null && loadOfferError) {
    return <NotFoundPage />;
  }

  if (offer === null || loadingStatus) {
    return <LoadSpinner />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <OfferPhoto key={image} imageSrc={image} />
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button
                  className={classIncluded({
                    'offer__bookmark-button': true,
                    button: true,
                    'offer__bookmark-button--active': offer.isFavorite,
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
                  <span style={{ width: `${getRating(offer.rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((goodsItem) => (
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
                      'offer__avatar-wrapper--pro': offer.host.isPro,
                    })}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <OfferReviews comments={Comments} />
            </div>
          </div>
          <Map
            offers={[...nearbyOffers.slice(1, 4), offer]}
            city={city}
            selectedOffer={offer.id}
            className={'offer__map'}
          />
        </section>
        <div className="container">
          <NearPlaces offers={nearbyOffers} />
        </div>
      </main>
    </div>
  );
};
