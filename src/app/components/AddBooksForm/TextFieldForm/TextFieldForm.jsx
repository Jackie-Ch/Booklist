function TextFieldForm({ name, type, placeholder, value, onChange, errors }) {
  return (
    <div>
      <input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
      <div>{errors}</div>
    </div>
  );
}

export default TextFieldForm;
