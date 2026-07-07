type Props = {
  sortBy: string;
  activeSort: string;
  onSortClick: (sortBy: string) => void;
}

export default function SortItem({sortBy, activeSort, onSortClick}: Props): JSX.Element {

  return (
    <li
      className={`places__option ${sortBy === activeSort ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => onSortClick(sortBy)}
    >
      {sortBy}
    </li>
  );
}
