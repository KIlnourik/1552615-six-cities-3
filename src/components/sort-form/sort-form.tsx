import { SORT_BY } from '../../utils/const';
import SortItem from './sort-item/sort-item';

type Props = {
  activeSort: string;
  isSortFormOpened: boolean;
  onSortFormClick: () => void;
  onSortFormChange: (sortBy: string) => void;
};

export default function SortForm({
  activeSort,
  isSortFormOpened,
  onSortFormClick,
  onSortFormChange
}: Props): JSX.Element {

  const handleSortFormClick = () => {
    onSortFormClick();
  };

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={handleSortFormClick}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortFormOpened ? 'places__options--opened' : ''}` }>
        {SORT_BY.map((dir) =>
          (
            <SortItem
              sortBy={dir}
              activeSort={activeSort}
              key={`${dir}_1`}
              onSortClick={onSortFormChange}
            />
          )
        )}
      </ul>
    </form>
  );
}
