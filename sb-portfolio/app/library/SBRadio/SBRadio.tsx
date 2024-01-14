import { InputFields } from '../types';

export function SBRadio(props: InputFields) {
  const { defaultChecked = false, labelText, name, onChange, value } = props;

  return (
    <>
      <input
        defaultChecked={defaultChecked}
        id={name}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />{' '}
      <label htmlFor={name}>{labelText}</label>
    </>
  );
}
