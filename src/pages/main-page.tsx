import { OffersListEmpty } from '../components/offers/offers-list-empty';
import { HeaderWhithNavigation } from '../components/header/header-with-navigation';
import { OfferList } from '../components/offers/offers-list';
import { Offer } from '../types/Offer';
import { classIncluded } from '../utils';

type MainPageProps = {
  offers: Offer[];
};

export const MainPage = ({ offers }: MainPageProps) => {
  console.log('render MainPage');
  return (
    <div className="page page--gray page--main">
      <HeaderWhithNavigation />

      <main
        className={classIncluded({
          page__main: true,
          'page__main--index': true,
          'page__main--index-empty': offers.length === 0,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        {offers.length === 0 ? (
          <OffersListEmpty />
        ) : (
          <OfferList offers={offers} />
        )}
      </main>
    </div>
  );
};
