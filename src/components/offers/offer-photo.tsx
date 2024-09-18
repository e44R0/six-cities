type OfferPhotoProps = {
  imageSrc: string;
};

export const OfferPhoto = (props: OfferPhotoProps): JSX.Element => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={props.imageSrc} alt="Photo studio" />
  </div>
);
