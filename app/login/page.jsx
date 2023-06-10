'use client';

import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { UserContext } from '../context/userContext.jsx';

async function loginUser(email, password) {
  const body = { email, password };
  const response = await fetch(
    `${process.env.VERCEL_BASE_URL}/api/user?endpoint=login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  if (response.ok) {
    return await response.json();
  } else {
    console.error('User login failed');
  }
}

const LoginPage = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [isScaled, setIsScaled] = useState(false);

  const { login } = useContext(UserContext);

  const handleClick = () => {
    setIsScaled(!isScaled);
  };

  const containerVariants = {
    scaled: { scale: 0 },
    unscaled: { scale: 1 },
  };
  const handleInput = e => {
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    const response = await loginUser(inputs.email, inputs.password);

    if (response.message === 'User not found') return;

    if (response) {
      login(response);
      handleClick();
    }
  };

  useEffect(() => {
    if (isScaled) {
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 250);
    }
  }, [isScaled]);

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      variants={containerVariants}
      initial={isScaled ? 'scaled' : 'unscaled'}
      animate={isScaled ? 'scaled' : 'unscaled'}
      transition={{ duration: 0.25 }}
    >
      Login
      <form>
        <div className='flex flex-col mb-3'>
          <label>Email</label>
          <input
            className='px-3 py-1'
            style={{ border: '1px solid #ccc' }}
            name='email'
            value={inputs.email || ''}
            onChange={handleInput}
          />
        </div>
        <div className='flex flex-col'>
          <label>Password</label>
          <input
            className='px-3 py-1'
            style={{ border: '1px solid #ccc' }}
            name='password'
            value={inputs.password || ''}
            onChange={handleInput}
          />
        </div>
        <button className='bg-gray-400 mt-5 px-3 py-1' onClick={onSubmit}>
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default LoginPage;
