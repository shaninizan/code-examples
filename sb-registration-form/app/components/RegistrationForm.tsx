'use client';

import { useState, FormEvent } from 'react';
import { Button } from '../library/Button';
import { Input } from '../library/Input';
import AddressForm from './AddressForm';

type registrationFormValues = {
  city?: string;
  email: string;
  fname: string;
  lname: string;
  password: string;
  state?: string;
  street?: string;
  zip?: string;
};

const sendRegistration = (values: registrationFormValues) => {
  // 👇 Send a fetch request to Backend API.
  fetch('/api/registration', {
    method: 'POST',
    body: JSON.stringify({
      values,
    }),
    headers: {
      accept: 'application/json',
    },
  }).catch((e) => console.log(e));
};

/**
 * Registration Form capturing email, password, first name, last name, and optional address fields: street, city, state, zip
 */
export default function RegistrationForm() {
  const [emailPass, setEmailPass] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [enterAddress, setEnterAddress] = useState(false);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [fnameValue, setFnamelValue] = useState('');
  const [lnameValue, setLnameValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [zipValue, setZipValue] = useState('');

  const validatePass = (e: string) => {
    console.log(e, e.length);
    //TODO validation
    if (e.length > 3) setValidPass(true);

    setPasswordValue(e);
  };

  const onSubmit = (e: FormEvent) => {
    if (!emailPass) {
      e.preventDefault();
      setEmailPass(true);
    } else {
      // TODO will have to remove preventDefault
      e.preventDefault();
      const values: registrationFormValues = {
        city: cityValue,
        email: emailValue,
        fname: fnameValue,
        lname: lnameValue,
        password: passwordValue,
        state: stateValue,
        street: streetValue,
        zip: zipValue,
      };
      const test = sendRegistration(values);
      console.log('form was submitted', test);

      // todo feedback
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {!emailPass ? (
        <section>
          <Input
            label="Enter your email address"
            name="email"
            onChange={(e) => setEmailValue(e)}
            type="email"
            value={emailValue}
          />
          <Input
            label="Create a password"
            name="password"
            onChange={(e) => validatePass(e)}
            type="password"
            value={passwordValue}
          />
          <Button text="Continue" disabled={!validPass} />
        </section>
      ) : (
        <section>
          <Input
            label="First name"
            name="fname"
            onChange={(e) => setFnamelValue(e)}
            type="text"
            value={fnameValue}
          />
          <Input
            label="Last name"
            name="lname"
            onChange={(e) => setLnameValue(e)}
            type="text"
            value={lnameValue}
          />
          <Input
            label="Enter Address (optional)"
            name="address"
            onChange={() => setEnterAddress(!enterAddress)}
            required={false}
            type="checkbox"
          />
          {enterAddress && (
            <AddressForm
              city={cityValue}
              setCity={setCityValue}
              setState={setStateValue}
              setStreet={setStreetValue}
              setZip={setZipValue}
              state={stateValue}
              street={streetValue}
              zip={zipValue}
            />
          )}
          <Button text="Complete Registration" />
        </section>
      )}
    </form>
  );
}
