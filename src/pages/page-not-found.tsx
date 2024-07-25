import { Link } from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => {
  console.log('render NotFoundPage');
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

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
