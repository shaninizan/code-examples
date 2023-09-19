'use client';

import { useState, FormEvent } from 'react';
import PasswordChecklist from 'react-password-checklist';

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

async function sendRegistration(values: registrationFormValues) {
  // NextJS acts as a proxy for POST API requests without CORS errors
  // More info in this link: https://reacthustle.com/blog/nextjs-send-post-request-to-external-api
  const res = await fetch('/api/registration', {
    method: 'POST',
    body: JSON.stringify({
      values,
    }),
    headers: {
      accept: 'application/json',
    },
  });

  const data = await res.json();
  return data;
}

/**
 * Registration Form capturing email, password, first name, last name, and optional address fields: street, city, state, zip
 */
export default function RegistrationForm() {
  const [emailPass, setEmailPass] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [enterAddress, setEnterAddress] = useState(false);

  const [response, setResponse] = useState();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [fnameValue, setFnamelValue] = useState('');
  const [lnameValue, setLnameValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [zipValue, setZipValue] = useState('');

  /**
   * @description Validates the password and enables the continue button
   * @param e value of the password
   */
  const validatePass = (e: string) => {
    const hasNum = /[0-9]/g;
    const hasChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;

    if (e.length > 7 && e.match(hasNum) && e.match(hasChar)) setValidPass(true);

    setPasswordValue(e);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!emailPass) {
      setEmailPass(true);
    } else {
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
      const test = await sendRegistration(values);
      setResponse(test.description);
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
          {/** This is a bonus; a React component with password feedback */}
          <PasswordChecklist
            rules={['minLength', 'number', 'specialChar']}
            minLength={8}
            value={passwordValue}
            messages={{
              minLength: 'The password must be 8 characters.',
              number: 'The password must contain at least one number.',
              specialChar:
                'The password must contain at least one special character.',
            }}
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
            label="Enter Address"
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
          {response && (
            <div>
              <p>
                Response: <span>{response}</span>
              </p>
            </div>
          )}
        </section>
      )}
    </form>
  );
}
