import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/features/booklist/booklistSlice';
import TextFieldForm from './TextFieldForm/TextFieldForm';

function AddBooksForm() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    bookName: '',
    bookAuthor: '',
    bookLink: '',
  });

  const validate = () => {
    const errors = {};
    for (const fieldName in data) {
      if (data[fieldName].trim() === '') {
        errors[fieldName] = `поле не заполнено`;
      }
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    const isValid = validate();
    if (!isValid) return;
    dispatch(
      addBook({
        id: new Date().valueOf(),
        title: data.bookName,
        author: data.bookAuthor,
        image: data.bookLink,
      })
    );
    setData({
      bookName: '',
      bookAuthor: '',
      bookLink: '',
    });
    console.log('форма отправлена');
    console.log(data);
  };

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextFieldForm
        name='bookName'
        type='text'
        placeholder='название книги'
        value={data.bookName}
        onChange={handleChange}
        errors={errors.bookName}
      />
      <TextFieldForm
        name='bookAuthor'
        type='text'
        placeholder='автор книги'
        value={data.bookAuthor}
        onChange={handleChange}
        errors={errors.bookAuthor}
      />
      <TextFieldForm
        name='bookLink'
        type='text'
        placeholder='ссылка на обложку книги'
        value={data.bookLink}
        onChange={handleChange}
        errors={errors.bookLink}
      />
      <button>Добавить</button>
    </form>
  );
}

export default AddBooksForm;
