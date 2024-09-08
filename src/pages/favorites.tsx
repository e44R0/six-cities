import { FavoritesList } from '../components/favorites/favorites-list';
import { FavoritesEmpty } from '../components/favorites/favorites-empty';
import { Footer } from '../components/footer/footer';
import { Settings } from '../const';
import { Header } from '../components/header/header';
import { Offer } from '../types/Offer';

type FavoritePageProps = {
  offers: Offer[];
};

export const FavoritesPage = ({ offers }: FavoritePageProps): JSX.Element => {
  console.log('render Favorites');
  return (
    <div className="page">
      <Header />

      {Settings.favoritesCount > 0 ? (
        <FavoritesList offers={offers} />
      ) : (
        <FavoritesEmpty />
      )}

      <Footer />
    </div>
  );
};
