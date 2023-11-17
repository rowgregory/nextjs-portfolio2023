import { headers } from '../../public/headers'
import { VERCEL_BASE } from '../../public/urls.js'

export async function sendMessage({ name, email, message }) {
  const body = { name, email, message }
  try {
    const response = await fetch(`${VERCEL_BASE}/api/user?endpoint=message`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (err) {
    console.error('Message has failed to send.', err)
  }
}
