type GoodsItemProps = {
  featureItem: string;
};

export const GoodsListItem = (props: GoodsItemProps): JSX.Element => (
  <li className="offer__inside-item">{props.featureItem}</li>
);
