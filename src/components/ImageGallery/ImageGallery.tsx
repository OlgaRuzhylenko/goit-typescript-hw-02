import ImageCard from "../ImageCard/ImageCard";
import { ImageResult } from "../pictures-api";
import css from './ImageGallery.module.css'

interface IImageDalleryProps {
    items: ImageResult[],
    onImageClick: (item: ImageResult) => void,
}

const ImageGallery: React.FC<IImageDalleryProps> = ({items, onImageClick}) => {
    return (
        <ul className={css.container}>
        {items.map((item) => (
          <li key={item.id} className={css.list}>
            <ImageCard item={item} onClick={() => onImageClick(item)}/>
          </li>
        ))}
      </ul>
    )
}

export default ImageGallery;