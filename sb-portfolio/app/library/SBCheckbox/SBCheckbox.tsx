import { InputFields } from '../types';

export function SBCheckbox(props: InputFields) {
  const { defaultChecked = false, labelText, name, onChange } = props;

  return (
    <>
      <input
        defaultChecked={defaultChecked}
        id={name}
        name={name}
        onChange={onChange}
        type="checkbox"
      />{' '}
      <label htmlFor={name}>{labelText}</label>
    </>
  );
}
