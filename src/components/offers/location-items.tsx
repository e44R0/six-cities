import { useDispatch, useSelector } from 'react-redux';
import { classIncluded } from '../../utils';
import { RootState } from '../../store/store';
import { changeCity } from '../../store/action';
import { memo } from 'react';

type LocationItemsProps = {
  city: string;
};

export const LocationItem = memo((props: LocationItemsProps): JSX.Element => {
  const { city } = props;
  const currentCity = useSelector((state: RootState) => state.currentCity);
  const dispatch = useDispatch();

  const cityClickHandler = () => {
    dispatch(changeCity(city));
  };

  console.log('render LocationItem:', city);

  return (
    <li className="locations__item">
      <a
        className={classIncluded({
          'locations__item-link': true,
          // prettier-ignore
          'tabs__item': true,
          'tabs__item--active': city === currentCity,
        })}
        onClick={cityClickHandler}
      >
        <span>{city}</span>
      </a>
    </li>
  );
});

LocationItem.displayName = 'LocationItem';
