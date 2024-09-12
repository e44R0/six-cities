import { classIncluded } from '../../utils';

type LocationItemsProps = {
  city: string;
  currentCity: string;
  onClick: (offerId: string) => void;
};

export const LocationItem = (props: LocationItemsProps): JSX.Element => {
  const { city, currentCity, onClick } = props;

  const cityClickhandler = () => {
    if (onClick) {
      onClick(city);
    }
  };

  return (
    <li className="locations__item">
      <a
        className={classIncluded({
          'locations__item-link': true,
          // prettier-ignore
          'tabs__item': true,
          'tabs__item--active': city === currentCity,
        })}
        onClick={cityClickhandler}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};
