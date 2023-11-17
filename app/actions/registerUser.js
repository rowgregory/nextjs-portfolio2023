import { headers } from '../../public/headers.jsx';

export async function registerUser(firstName, lastName, email, password) {
  const body = { firstName, lastName, email, password };
  const response = await fetch(
    'http://localhost:3000/api/user?endpoint=register',
    {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    }
  );
  if (response.ok) {
    return await response.json();
  } else {
    console.error('User registration failed');
  }
}
