import { useEffect, useRef } from 'react';
import { City, Offer } from '../../types/Offer';
import useMap from '../../hooks/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type mapProps = {
  city: City;
  offers: Offer[];
  selectedOffer: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const Map = (props: mapProps): JSX.Element => {
  const { city, selectedOffer } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const cityOffers = props.offers.filter(
    (offer) => offer.city.name === city.name,
  );

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cityOffers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            point.id === selectedOffer ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markerLayer);

        // marker.setIcon(defaultCustomIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityOffers, selectedOffer]);

  return (
    <div className="cities__right-section">
      <section className="cities__map map" ref={mapRef}></section>
    </div>
  );
};
