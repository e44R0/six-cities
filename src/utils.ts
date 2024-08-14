export const classIncluded = (classNames: { [key: string]: boolean }) => {
  const classReturned: string[] = Object.keys(classNames).filter(
    (key: string) => classNames[key] === true,
  );
  return classReturned.join(' ');
};

export const getRating = (value: number): string => String((100 * value) / 5);

export const createOfferLink = (value: string): string => `/offer/${value}`;
