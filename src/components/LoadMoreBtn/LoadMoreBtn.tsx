import css from "./LoadMoreBtn.module.css";

interface ILoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.box}>
      <button onClick={onClick} className={css.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
