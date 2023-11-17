'use client';

import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '../../../context/userContext.jsx';
import { registerUser } from '../../../actions/registerUser.js';

const RegisterPage = () => {
  const { login } = useContext(UserContext);
  const router = useRouter();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(
      inputs.firstName,
      inputs.lastName,
      inputs.email,
      inputs.password
    );

    if (response) {
      login(response);
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-fit">
      RegisterPage
      <form>
        <div className="flex flex-col mb-3">
          <label>First Name</label>
          <input
            style={{ border: '1px solid #ccc' }}
            name="firstName"
            value={inputs.firstName || ''}
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label>Last Name</label>
          <input
            style={{ border: '1px solid #ccc' }}
            name="lastName"
            value={inputs.lastName || ''}
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label>Email</label>
          <input
            style={{ border: '1px solid #ccc' }}
            name="email"
            value={inputs.email || ''}
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label>Password</label>
          <input
            style={{ border: '1px solid #ccc' }}
            name="password"
            value={inputs.password || ''}
            onChange={handleInput}
          />
        </div>
        <button onClick={onSubmit}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
