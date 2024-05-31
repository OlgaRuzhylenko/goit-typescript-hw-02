import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { FormEvent } from "react";

interface ISearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target;
    const text = form.elements.text.value;
    if (text === "") {
      toast.error("Please, enter your request");
    }
    onSearch(text);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          name="text"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn}>
          <CiSearch className={css.svg} />
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
