export type LabelProps = {
  /** Field label text */
  label: string;
  /** Name of the input; matches the label's `for` */
  name: string;
  /** React form element to be wrapped by the label */
  children: JSX.Element;
};

/**
 * @description Label to wrap a form input
 * @param props name, label, children
 * @returns React component
 */
export function Label(props: LabelProps) {
  const { name, label, children } = props;

  return (
    <>
      <label htmlFor={name}>
        {label}: &nbsp;
        {children}
      </label>
      <br />
    </>
  );
}
