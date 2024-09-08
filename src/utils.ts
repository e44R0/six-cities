import { Offer } from './types/Offer';

export const classIncluded = (
  classNames: { [key: string]: boolean },
  otherClasses: string[] = [],
) => {
  const classReturned: string[] = Object.keys(classNames).filter(
    (key: string) => classNames[key] === true,
  );

  return classReturned.concat(otherClasses).join(' ');
};

export const getRating = (value: number): string => String((100 * value) / 5);

export const createOfferLink = (value: string): string => `/offer/${value}`;

export const getCurrentCityOffers = (
  offers: Offer[],
  currentCity: string,
): Offer[] => offers.filter((offer) => offer.city.name === currentCity);
