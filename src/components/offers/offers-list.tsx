import { useState } from 'react';
// import { Offer } from '../../types/Offer';
import { Card } from '../card';
import { Map } from '../map/map';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
// import { city } from '../../mocks/offers';

export const OfferList = (): JSX.Element => {
  const [offerId, setId] = useState('');

  const currentCity = useSelector((state: RootState) => state.currentCity);
  const offers = useSelector((state: RootState) => state.offers);

  console.log('hovered offer:', offerId);

  // if (offers.length === 0) return ...;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {currentCity}
          </b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <Card key={offer.id} offer={offer} onHover={setId} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            offers={offers}
            city={offers[0].city}
            selectedOffer={offerId}
            className={'cities__map'}
          />
        </div>
      </div>
    </div>
  );
};
