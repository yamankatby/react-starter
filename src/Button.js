const Button = (props) => (
  <button
    style={{ backgroundColor: props.color }}
    onClick={() => {
      document.body.style.backgroundColor = props.color;
    }}
  >
    {props.children}
  </button>
);

export default Button;
