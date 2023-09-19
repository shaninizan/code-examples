export type LabelProps = {
  /** Field label text */
  label: string;
  /** Name of the input; matches the label's `for` */
  name: string;
  /** determine if input is required, default is true */
  required?: boolean;
  /** React form element to be wrapped by the label */
  children: JSX.Element;
};

/**
 * @description Label to wrap a form input
 * @param props name, label, children
 * @returns React component
 */
export function Label(props: LabelProps) {
  const { label, name, required, children } = props;

  return (
    <>
      <label htmlFor={name}>
        {label}
        {required === false && <span> &nbsp;(optional)</span>}: &nbsp;
        {children}
      </label>
      <br />
    </>
  );
}
