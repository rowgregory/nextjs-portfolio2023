'use client';

import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link.js';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className='fixed'>
      Header <div>{session?.user?.email}</div>{' '}
      {session?.user ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <Link href='/login'>Login</Link>
      )}
    </header>
  );
};

export default Header;
