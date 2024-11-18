import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page';
import { OfferPage } from './pages/offer';
import { LoginPage } from './pages/login';
import { NotFoundPage } from './pages/page-not-found';
import { FavoritesPage } from './pages/favorites';
import { PrivateRoute } from './components/private-route';
// import { Offers } from './mocks/offers';
import { AppRoute } from './const';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import HistoryRouter from './components/history-route';
import { browserHistory } from './utils';

export const App = (): JSX.Element => {
  const authorizationStatus = useSelector(
    (state: RootState) => state.authorizationStatus,
  );
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
};
