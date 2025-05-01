type ButtonType = {
  label: string;
  onClick: () => void;
  disabled: boolean;
};

function Button(props: ButtonType) {
  return (
    <div>
      <button disabled={props.disabled} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
