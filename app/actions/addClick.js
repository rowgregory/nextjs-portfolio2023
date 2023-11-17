import { headers } from '../../public/headers'

export async function addClick(click) {
  await fetch(`${process.env.VERCEL_BASE}/api/clicks?endpoint=clicks`, {
    method: 'POST',
    headers,
    body: JSON.stringify(click)
  })
}
