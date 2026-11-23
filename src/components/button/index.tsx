import "./style.css";

type ButtonProps = {
  title: string;
  label: string;
  onClick?: () => void;
};
function Button(props: ButtonProps) {
  const { title, label, onClick } = props;

  return (
    <button title={title} className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
