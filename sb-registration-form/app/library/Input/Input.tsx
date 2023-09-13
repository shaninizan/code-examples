import { ChangeEvent } from 'react';
import { Label, LabelProps } from '../Label';

export type InputProps = Pick<LabelProps, 'label' | 'name'> & {
  /** function to call when value is changed */
  onChange?: (value: string) => void;
  /** text to display as placeholder */
  placeholder?: string;
  /** determine if input is required, default is true */
  required?: false;
  /** html `type` for the `input`; allows native HTML behavior */
  type: 'checkbox' | 'email' | 'number' | 'password' | 'text';
  /** value of the input */
  value?: string;
};

/**
 * @description General input type for form elements
 * @param props label, name, onChange, placeholder, required, type
 * @returns     React component with `<input>` wrapped by a `<label>`
 */
export function Input(props: InputProps) {
  const {
    label,
    name,
    onChange,
    placeholder,
    required = true,
    type,
    value,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const value = event.target.value;
      onChange(value.trimStart());
    }
  };

  return (
    <Label label={label} name={name}>
      <input
        aria-label={label}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </Label>
  );
}
