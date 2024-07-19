import { MainPage } from './pages/MainPage';
import { offers } from './mocks/offers';

export const App = (): JSX.Element => {
  console.log('render app');
  return <MainPage offers={offers} />;
};
