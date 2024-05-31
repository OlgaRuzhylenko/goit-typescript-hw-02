import ImageCard from "../ImageCard/ImageCard";
import {IImage} from '../App/App'
import css from './ImageGallery.module.css'

interface IImageDalleryProps {
    items: IImage[],
    onImageClick: (item: IImage) => void,
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