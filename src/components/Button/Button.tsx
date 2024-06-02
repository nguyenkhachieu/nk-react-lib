interface ButtonI {
  name: string;
}

function Button({ name }: ButtonI) {
  return <button>{name}</button>;
}

export default Button;
