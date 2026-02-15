import { Helmet } from 'react-helmet-async';
import LoginForm from '../../components/login-form/login-form';

export default function LoginPage(): JSX.Element {
  return (
    <main className="page__main page__main--login">
      <Helmet >
        <title>6 cities: authorization</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
