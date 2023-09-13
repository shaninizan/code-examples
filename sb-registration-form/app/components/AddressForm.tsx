import { Input } from '../library/Input';

/**
 * @description Form elements for entering an address
 * @returns ReactFragment for Address Fields
 */
export default function AddressForm(props: {
  city: string;
  setCity: (e: string) => void;
  setState: (e: string) => void;
  setStreet: (e: string) => void;
  setZip: (e: string) => void;
  state: string;
  street: string;
  zip: string;
}) {
  const { city, setCity, setState, setStreet, setZip, state, street, zip } =
    props;
  // Note:  Given more time, this could be a lot more robust. Here I have chosen to use simple inputs for US-based addresses, and utilize built-in HTML validation.
  //        The best way to do this would be to implement an API, such as Google Maps, which would parse input against known addresses.
  //        The most basic improvement would be a select dropdown for states.
  //        A big improvement would be to allow internationalization by changing the form labels and their content types, based on locale or a country drop-down
  //        Canada, for example, would get a "Province" rather than "State", and the zip code format would allow both numbers and letters, but in a unique pattern
  //        In either of these scenarios, more would be needed in this component for validation purposes.
  return (
    <>
      <Input
        label="Street"
        name="street"
        type="text"
        value={street}
        onChange={setStreet}
      />
      <Input
        label="City"
        name="city"
        type="text"
        value={city}
        onChange={setCity}
      />
      <Input
        label="State"
        name="state"
        type="text"
        value={state}
        onChange={setState}
      />
      <Input
        label="Zip"
        name="zip"
        type="number"
        value={zip}
        onChange={setZip}
      />
    </>
  );
}
