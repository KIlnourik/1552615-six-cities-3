import FavoriteItem from './favorite-item';

export default function FavoriteList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoriteItem />
    </ul>
  );
}
