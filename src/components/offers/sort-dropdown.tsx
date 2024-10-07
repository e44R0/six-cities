import { useState } from 'react';
import { SortList } from './sort-dropdown-list';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Filters } from '../../const';

export const SortingDropdown = (): JSX.Element => {
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
              onClick={setSortListVisible}
              sortListVisible={sortListVisible}
              filtersItem={filtersItem}
            />
          ))}

        {/* <li className="places__option places__option--active" tabIndex={0}>
          Popular
        </li>
        <li className="places__option" tabIndex={0}>
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0}>
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
          Top rated first
        </li> */}
      </ul>
    </form>
  );
};
