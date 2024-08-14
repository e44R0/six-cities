import { FavoritesNotEmpty } from '../components/favorites/favorites-not-empty';
import { FavoritesEmpty } from '../components/favorites/favorites-empty';
import { Footer } from '../components/footer/footer';
import { Settings } from '../const';
import { Header } from '../components/header/header';

export const FavoritesPage = (): JSX.Element => {
  console.log('render Favorites');
  return (
    <div className="page">
      <Header />

      {Settings.favoritesCount > 0 ? <FavoritesNotEmpty /> : <FavoritesEmpty />}

      <Footer />
    </div>
  );
};
