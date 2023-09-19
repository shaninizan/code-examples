export type ButtonProps = {
  disabled?: boolean;
  text: string;
};

export function Button(props: ButtonProps) {
  const { disabled = false, text } = props;

  return <button disabled={disabled}>{text}</button>;
}
