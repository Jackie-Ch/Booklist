import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showEditForm,
  saveChangesEditedForm,
} from '../../redux/features/booklist/booklistSlice';
import style from './EditForm.module.scss';

function EditForm() {
  const newEditForm = useSelector((state) => state.booklist.newEditForm);
  const dispatch = useDispatch();

  const [newTitle, setTitle] = useState(newEditForm.title);
  const [newAuthor, setNewAuthor] = useState(newEditForm.author);
  const [newLink, setNewLink] = useState(newEditForm.image);

  const updatedBook = {
    id: newEditForm.id,
    title: newTitle,
    author: newAuthor,
    image: newLink,
  };

  return (
    <form className={style.editForm}>
      <button
        className={style.cancelBtn}
        type='button'
        onClick={() => dispatch(showEditForm(false))}
      >
        отмена
      </button>
      <h2>Редактирование</h2>
      <div>
        <input
          className={style.editFormInput}
          name='title'
          placeholder='Название книги'
          value={newTitle}
          required
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <input
          className={style.editFormInput}
          type='text'
          name='author'
          placeholder='Автор книги'
          value={newAuthor}
          required
          onChange={(event) => setNewAuthor(event.target.value)}
        />
      </div>
      <div>
        <input
          className={style.editFormInput}
          type='text'
          name='link'
          placeholder='Ссылка на книгу'
          value={newLink}
          required
          onChange={(event) => setNewLink(event.target.value)}
        />
      </div>
      <div>
        <button
          className={style.saveBtn}
          onClick={() => dispatch(saveChangesEditedForm(updatedBook))}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
}

export default EditForm;
