import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main-page';
import { OfferPage } from './pages/offer';
import { LoginPage } from './pages/login';
import { NotFoundPage } from './pages/page-not-found';
import { FavoritesPage } from './pages/favorites';
import { PrivateRoute } from './components/private-route';
import { offers } from './mocks/offers';
import { AppRoute, Settings } from './const';

export const App = (): JSX.Element => (
  // console.log('render app');
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage offers={offers} />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={Settings.authorizationStatus}>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Offer} element={<OfferPage offers={offers} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
