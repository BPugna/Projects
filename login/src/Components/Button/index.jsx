const Button = (props) => {
  const {
    type = props.type || "button",
    text = props.text,
    onClick = props.onClick,
  } = props;

  return (
    <>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
