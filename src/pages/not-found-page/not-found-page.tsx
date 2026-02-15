import { Link } from 'react-router-dom';
import { Pages } from '../../const';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Helmet>
        <title>6 cities: 404 exception</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">404 ошибка.<br />Страница не найдена</h1>
          <Link to={Pages.Main} className="favorites__title" >Вернуться на главную страницу</Link>
        </section>
      </div>
    </main>
  );
}
