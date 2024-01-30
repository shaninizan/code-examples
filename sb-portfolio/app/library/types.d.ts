export type InputFields = {
  defaultChecked?: boolean;
  labelText: string;
  name: string;
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
};
