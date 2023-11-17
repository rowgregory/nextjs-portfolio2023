import { headers } from '../../public/headers.jsx'
import { VERCEL_BASE } from '../../public/urls.js'

export async function addClick(click) {
  try {
    await fetch(`${VERCEL_BASE}/api/clicks?endpoint=clicks`, {
      method: 'POST',
      headers,
      body: JSON.stringify(click)
    })
  } catch (err) {
    console.log('CLICK ERROR: ', err)
  }
}
