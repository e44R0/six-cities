import { useRef, useState } from 'react';
import { Offer } from '../../types/Offer';
import { Card } from '../card';
import { Map } from '../map/map';
import { city } from '../../mocks/offers';

type CitiesProps = {
  offers: Offer[];
};

export const OfferList = ({ offers }: CitiesProps): JSX.Element => {
  // console.log('render offer list');
  const [offerId, setId] = useState('');
  console.log('hovered offer:', offerId);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in Amsterdam
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
        <Map offers={offers} city={city} />
      </div>
    </div>
  );
};
