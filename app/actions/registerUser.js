import { headers } from '../../public/headers.jsx'

export async function registerUser(firstName, lastName, email, password) {
  const body = { firstName, lastName, email, password }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_BASE}/api/user?endpoint=register`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }
  )
  if (response.ok) {
    return await response.json()
  } else {
    console.error('User registration failed')
  }
}
