function Input(prop) {
  return (
    <input type={prop.type} placeholder={prop.placeholder} value={prop.value} />
  );
}

export default Input;
