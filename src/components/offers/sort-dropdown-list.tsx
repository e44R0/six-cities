import { useDispatch, useSelector } from 'react-redux';
import { classIncluded } from '../../utils';
import { RootState } from '../../store/store';
import { changeSortingType } from '../../store/action';

type SortListProps = {
  onClick: (isVisible: boolean) => void;
  sortListVisible: boolean;
  filtersItem: string;
};

export const SortList = (props: SortListProps): JSX.Element => {
  const sortingType = useSelector((state: RootState) => state.sortingType);
  const dispatch = useDispatch();

  const sortingTypeClickHandler = () => {
    dispatch(changeSortingType(props.filtersItem));
    props.onClick(!props.sortListVisible);
  };

  return (
    <li
      className={classIncluded({
        // prettier-ignore
        'places__option': true,
        'places__option--active': props.filtersItem === sortingType,
      })}
      onClick={sortingTypeClickHandler}
      tabIndex={0}
    >
      {props.filtersItem}
    </li>
  );
};
