import AddBooksForm from '../AddBooksForm/AddBooksForm';
import BookItem from '../BookItem/BookItem';
import EditForm from '../editForm/EditForm';
import style from './BookList.module.scss';
import { useSelector } from 'react-redux';

function BookList() {
  const { data, showEditForm } = useSelector((state) => state.booklist);

  return (
    <>
      <header className={style.header}>
        <h1>Список книг</h1>
        <AddBooksForm />
      </header>

      {data.length ? (
        <div className={style.content}>
          <BookItem books={data} />
        </div>
      ) : (
        <h2>Список книг пуст</h2>
      )}
      {showEditForm && <EditForm />}
    </>
  );
}

export default BookList;
