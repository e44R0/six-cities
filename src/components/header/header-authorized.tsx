import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getCountFavoriteOffers } from '../../utils';
import { logoutAction } from '../../store/api-actions';

export const HeaderNavigationAuthorized = (): JSX.Element => {
  const userEmail = useSelector((state: RootState) => state.userInfo.email);
  const offers = useSelector((state: RootState) => state.offers);

  const dispatch = useDispatch<AppDispatch>();
  const SignOutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to="/favorites"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{userEmail}</span>
            <span className="header__favorite-count">
              {getCountFavoriteOffers(offers)}
            </span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout" onClick={SignOutHandler}>
              Sign out
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
