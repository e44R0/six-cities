import { Link } from 'react-router-dom';
import { Header } from '../components/header/header';

export const NotFoundPage = (): JSX.Element => {
  console.log('render NotFoundPage');
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Error 404</h1>
            <h2>Page not found</h2>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <div className="locations__item-link">
                <Link to="/">Go to main page</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
