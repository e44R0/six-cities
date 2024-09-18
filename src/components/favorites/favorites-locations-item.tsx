import { useState } from 'react';
import { Offer } from '../../types/Offer';
import { Card } from '../card';

type FavoriteListItemsProps = {
  cityName: string;
  offers: Offer[];
};

export const FavoritesLocationItem = ({
  cityName,
  offers,
}: FavoriteListItemsProps): JSX.Element => {
  const [offerId, setId] = useState('');
  console.log('hovered offer:', offerId);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <Card key={offer.id} offer={offer} onHover={setId} favoriteCard />
        ))}
      </div>
    </li>
  );
};
