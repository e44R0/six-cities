import { OffersListEmpty } from '../components/offers/offers-list-empty';
import { OfferList } from '../components/offers/offers-list';
import { Offer } from '../types/Offer';
import { classIncluded, getCurrentCityOffers } from '../utils';
import { Header } from '../components/header/header';
import { Cities } from '../const';
import { LocationItem } from '../components/offers/location-items';
import { useState } from 'react';

type MainPageProps = {
  offers: Offer[];
};

export const MainPage = ({ offers }: MainPageProps) => {
  const [currentCity, setCurrentCity] = useState('Paris');
  // console.log(currentCity);
  return (
    <div className="page page--gray page--main">
      <Header />

      <main
        className={classIncluded({
          // prettier-ignore
          'page__main': true,
          'page__main--index': true,
          'page__main--index-empty': offers.length === 0,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Cities.map((city) => (
                <LocationItem
                  key={city}
                  city={city}
                  currentCity={currentCity}
                  onClick={setCurrentCity}
                />
              ))}
            </ul>
          </section>
        </div>
        {offers.length === 0 ? (
          <OffersListEmpty />
        ) : (
          <OfferList
            offers={getCurrentCityOffers(offers, currentCity)}
            currentCity={currentCity} // Эту переменную, полагаю, можно вытаскивать из массива offers?
          />
        )}
      </main>
    </div>
  );
};
