export type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  text: string;
};

export function Button(props: ButtonProps) {
  const { disabled = false, onClick, text } = props;
  

  return (
    <button disabled={disabled} onClick={() => onClick}>
      {text}
    </button>
  );
}
