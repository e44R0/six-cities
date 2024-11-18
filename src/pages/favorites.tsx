import { FavoritesList } from '../components/favorites/favorites-list';
import { FavoritesEmpty } from '../components/favorites/favorites-empty';
import { Footer } from '../components/footer/footer';
import { Settings } from '../const';
import { Header } from '../components/header/header';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const FavoritesPage = (): JSX.Element => {
  const offers = useSelector((state: RootState) => state.offers);
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
