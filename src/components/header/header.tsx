import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { HeaderNavigationAuthorized } from './header-authorized';
import { HeaderNavigationNotAuthorized } from './header-not-authorized';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface HeaderProps {
  withoutNav?: boolean;
}

export const Header = ({ withoutNav }: HeaderProps): JSX.Element => {
  const authorizationStatus = useSelector(
    (state: RootState) => state.authorizationStatus,
  );
  return (
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
          {!withoutNav &&
            (authorizationStatus === AuthorizationStatus.Auth ? (
              <HeaderNavigationAuthorized />
            ) : (
              <HeaderNavigationNotAuthorized />
            ))}
        </div>
      </div>
    </header>
  );
};
