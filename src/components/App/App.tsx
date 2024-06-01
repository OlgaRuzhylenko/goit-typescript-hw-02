import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Modal from 'react-modal';
import css from "./App.module.css";
import { fetchImg, ImageResult } from "../pictures-api";
Modal.setAppElement('#root');
export interface IImage {
  id: string;
  src: string;
}
 export interface ISelectedImage {
  url: string;
  description: string;
}
// interface IImageClicked {
//   urls: {
//     regular: string;
//   };
//   alt_description: string;
// }

export default function App() {
  const [images, setImages] = useState<ImageResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ISelectedImage | null>(
    null
  );

  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleImageClick = (image: ImageResult) => {
    setSelectedImage({
      url: image.urls.regular,
      description: image.alt_description,
    });
    openModal();
  };

    useEffect (()=> {
      if (query === '') {
        return
      }
      async function getImages(){
    try {
      setIsLoading(true)
      const data: ImageResult[] = await fetchImg({ searchQuery: query, currentPage: page });
      setImages((prevImages) => {
        return [...prevImages, ...data];
      });
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
      } getImages()
    }, [query, page])

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage/>}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader/>}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      {selectedImage && <ImageModal isOpen={modalIsOpen} closeModal={closeModal} imageData={selectedImage} />}
    </div>
  );
}
