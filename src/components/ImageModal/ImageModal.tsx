import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ISelectedImage } from "../App/App";

interface IImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageData: ISelectedImage;
}
const ImageModal: React.FC<IImageModalProps> = ({
  isOpen,
  closeModal,
  imageData,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={css.Modal}>
      {imageData && (
        <div className={css.container}>
          <img
            src={imageData.url}
            alt={imageData.description}
            className={css.img}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
