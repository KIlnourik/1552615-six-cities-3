import Logo from '../logo/logo';
import {AuthStatus, Pages} from '../../utils/const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {SyntheticEvent, useEffect, useState} from 'react';
import {logoutAction} from '../../store/api-actions.ts';

export default function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleLogoutClick = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(logoutAction);
    setIsAuth(false);
  };

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [authStatus]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isAuth ? (
                  <>
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={Pages.Main} onClick={handleLogoutClick}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={Pages.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
