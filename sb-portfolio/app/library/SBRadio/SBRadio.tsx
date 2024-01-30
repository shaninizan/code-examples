import { InputFields } from '../types';

export function SBRadio(props: InputFields) {
  const { defaultChecked = false, labelText, name, onChange, value } = props;

  return (
    <>
      <input
        defaultChecked={defaultChecked}
        id={name + '-' + value}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />{' '}
      <label htmlFor={name + '-' + value}>{labelText}</label>
    </>
  );
}
