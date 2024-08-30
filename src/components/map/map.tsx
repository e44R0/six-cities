import { useRef } from 'react';
import { City, Offer } from '../../types/Offer';
import useMap from '../../hooks/use-map';

type mapProps = {
  city: City;
  offers: Offer[];
};

export const Map = (props: mapProps): JSX.Element => {
  const city = props.city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <div ref={mapRef}></div>
      </section>
    </div>
  );
};
