import { Offer } from '../types/Offer';
import { Card } from './card';

type NearPlacesPrors = {
  offers: Offer[];
};

export const NearPlaces = (props: NearPlacesPrors): JSX.Element => {
  const nearOffers = props.offers.slice(0, 3);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((offer) => (
          <Card key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
};
