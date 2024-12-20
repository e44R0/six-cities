import { useState } from 'react';
import { SortList } from './sort-dropdown-list';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Filters } from '../../const';
import { memo } from 'react';

export const SortingDropdown = memo((): JSX.Element => {
  console.log('render SortingDropdown');
  const [sortListVisible, setSortListVisible] = useState(false);
  const sortingType = useSelector((state: RootState) => state.sortingType);

  const sortingTypeClickHandler = () => {
    setSortListVisible(!sortListVisible);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        onClick={sortingTypeClickHandler}
        tabIndex={0}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortListVisible &&
          Filters.map((filtersItem) => (
            <SortList
              key={filtersItem}
              onClick={sortingTypeClickHandler}
              filtersItem={filtersItem}
            />
          ))}
      </ul>
    </form>
  );
});

SortingDropdown.displayName = 'SortingDropdown';
