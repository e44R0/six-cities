import { FavoritesNotEmpty } from '../components/favorites/favorites-not-empty';
import { FavoritesEmpty } from '../components/favorites/favorites-empty';
import { Footer } from '../components/footer/footer';
import { HeaderWhithNavigation } from '../components/header/header-with-navigation';
import { Settings } from '../const';

export const FavoritesPage = (): JSX.Element => {
  console.log('render Favorites');
  return (
    <div className="page">
      <HeaderWhithNavigation />

      {Settings.favoritesCount > 0 ? <FavoritesNotEmpty /> : <FavoritesEmpty />}

      <Footer />
    </div>
  );
};
