import { headers } from '../../public/headers.jsx'

export async function addClick(click) {
  console.log('CLICK: ', click)
  try {
    await fetch(`${process.env.VERCEL_BASE}/api/clicks?endpoint=clicks`, {
      method: 'POST',
      headers,
      body: JSON.stringify(click)
    })
  } catch (err) {
    console.log('CLICK ERROR: ', err)
  }
}
