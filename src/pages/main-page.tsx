import { OfferList } from '../components/offers/offers-list';
import { classIncluded } from '../utils';
import { Header } from '../components/header/header';
import { Cities } from '../const';
import { LocationItem } from '../components/offers/location-items';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const MainPage = () => {
  const offers = useSelector((state: RootState) => state.offers);
  console.log('render MainPage');
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
                <LocationItem key={city} city={city} />
              ))}
            </ul>
          </section>
        </div>
        <OfferList />
      </main>
    </div>
  );
};
