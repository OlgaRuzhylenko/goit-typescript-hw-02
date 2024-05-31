import css from "./ImageCard.module.css";

interface ISelectedImage {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface IImageCardProps {
  item: ISelectedImage;
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
