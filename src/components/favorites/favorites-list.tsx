import { Offer } from '../../types/Offer';
import { FavoritesLocationItem } from './favorites-locations-item';

type FavoritesListProps = {
  offers: Offer[];
};

type CityOffers = {
  [cityName: string]: Offer[];
};

export const FavoritesList = ({ offers }: FavoritesListProps): JSX.Element => {
  console.log('rendor favorites');

  const cities = offers.filter((offer) => offer.isFavorite === true);

  // const uniqueCities = Array.from(
  //   new Set(cities.map((offer) => offer.city.name)),
  // );

  // 1. вынести в отдельую ф-ю groupOffers
  // 2. сделать унвиверсальную ф-ю groupBy(array, selector: (item) => item.propName)
  //    groupBy(offers, (offer) => offer.city.name);

  const cityOffers = cities.reduce((acc: CityOffers, offer: Offer) => {
    const cityName = offer.city.name;
    // Если город еще не добавлен в объект, создаем новый массив
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    // Добавляем текущее объявление в массив соответствующего города
    acc[cityName].push(offer);

    return acc;
  }, {});

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.keys(cityOffers).map((cityName) => (
              <FavoritesLocationItem
                key={cityName}
                cityName={cityName}
                offers={cityOffers[cityName]}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
