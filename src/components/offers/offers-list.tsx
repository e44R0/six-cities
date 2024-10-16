import { useState } from 'react';
import { Card } from '../card';
import { Map } from '../map/map';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { OffersListEmpty } from './offers-list-empty';
import { SortingDropdown } from './sort-dropdown';
import { getCurrentCityOffers, getSortOffers } from '../../utils';

export const OfferList = (): JSX.Element => {
  const [offerId, setId] = useState('');

  const currentCity = useSelector((state: RootState) => state.currentCity);
  const offers = useSelector((state: RootState) => state.offers);
  const sortType = useSelector((state: RootState) => state.sortingType);
  const filtredOffers = getCurrentCityOffers(offers, currentCity);
  // const { offers, currentCity, ... }= useSelector((state) => state);
  console.log('hovered offer:', offerId);

  if (offers.length === 0) {
    return <OffersListEmpty />;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {filtredOffers.length} places to stay in {currentCity}
          </b>
          <SortingDropdown />
          <div className="cities__places-list places__list tabs__content">
            {getSortOffers(filtredOffers, sortType).map((offer) => (
              <Card key={offer.id} offer={offer} onHover={setId} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            offers={filtredOffers}
            city={filtredOffers[0].city}
            selectedOffer={offerId}
            className={'cities__map'}
          />
        </div>
      </div>
    </div>
  );
};
