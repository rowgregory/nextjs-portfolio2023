'use client';

import { signIn } from 'next-auth/react';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center align-center h-screen">
      <button
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25 mb-2 mx-auto"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginPage;
