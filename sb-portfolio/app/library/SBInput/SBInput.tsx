import { InputFields } from '../types';

export function SBInput(props: InputFields) {
  const { labelText, name, onChange } = props;

  return (
    <>
      <label htmlFor={name}>{labelText}: </label>
      <input type="text" name={name} id={name} onChange={onChange} required />
    </>
  );
}
