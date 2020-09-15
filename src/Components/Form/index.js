import React, { useState } from 'react';

const Form = ({ saveUserList }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValidForm = true;
    if(name === '') {
        setNameError(true);
        isValidForm = false;
    }
    if (phone === '' && email === '') {
        setPhoneError(true);
        setEmailError(true);
        isValidForm = false;
    }
    const isValidPhone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone);
    if (phone !== '' && !isValidPhone) {
        setPhoneError(true);
        isValidForm = false;
    }
    const isValidEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
    if (email !== '' && !isValidEmail) {
        setEmailError(true);
        isValidForm = false;
    }
    if (isValidForm) {
        saveUserList([{ name, phone, email }]);
        setName('');
        setPhone('');
        setEmail('');
        setPhoneError(false);
        setEmailError(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
        <div className="field-container">
            <label>Name</label>
            <input
                className={`${nameError ? "error" : ""}`}
                onChange={(event) => {
                    setName(event.target.value);
                    setNameError(false);
                }}
                value={name}
            />
        </div>
        <div className="field-container">
            <label>Phone</label>
            <input
                className={`${phoneError ? "error" : ""}`}
                onChange={(event) => {
                    setPhone(event.target.value);
                    setPhoneError(false);
                }}
                value={phone}
                maxLength={10}
            />
        </div>
        <div className="field-container">
            <label>Email</label>
            <input
                className={`${emailError ? "error" : ""}`}
                onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError(false);
                }}
                value={email}
            />
        </div>
        <button className='button'>Submit</button>
    </form>
  );
};

export default Form;