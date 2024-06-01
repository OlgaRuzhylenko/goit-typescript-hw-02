import css from "./ImageCard.module.css";
import { ImageResult } from "../pictures-api";

interface IImageCardProps {
  item: ImageResult;
  onClick: () => void;
}

const ImageCard: React.FC<IImageCardProps> = ({ item, onClick }) => {
  return (
    <div className={css.box}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={css.img}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
