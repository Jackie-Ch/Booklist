import style from './BookItem.module.scss';
import { useDispatch } from 'react-redux';
import {
  deleteBook,
  editBook,
} from '../../redux/features/booklist/booklistSlice';

function BookItem({ books }) {
  const dispatch = useDispatch();

  return (
    <>
      {books.map((book) => (
        <div className={style.bookItem} key={book.id}>
          <div className={style.bookContent}>
            <div className={style.cover}>
              <img src={book.image} alt={`${book.title}`} />
            </div>
            <div>
              <h4>{book.title}</h4>
              <span>Автор: {book.author}</span>
            </div>
          </div>
          <div className={style.controlBtn}>
            <button
              onClick={() => dispatch(editBook(book.id))}
              className={style.editBtn}
            >
              Редактировать
            </button>
            <button
              onClick={() => dispatch(deleteBook(book.id))}
              className={style.delBtn}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default BookItem;
