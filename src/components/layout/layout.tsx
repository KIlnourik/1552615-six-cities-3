import { Outlet, useMatch} from 'react-router-dom';
import Header from '../header/header';
import { PageClassNames, Pages } from '../../const';
import classNames from 'classnames';

export default function Layout(): JSX.Element {
  const isMainPage = useMatch(Pages.Main);
  const isLoginPage = useMatch(`/${Pages.Login}`);

  const pageClass = classNames('page', {
    [PageClassNames.Main]: isMainPage,
    [PageClassNames.Login]: isLoginPage,
  });

  return (
    <div className={pageClass}>
      <Header />
      <Outlet />
    </div>
  );
}
