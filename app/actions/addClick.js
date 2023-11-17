import { headers } from '../../public/headers';

export async function addClick(click) {
  await fetch('http://localhost:3000/api/clicks?endpoint=clicks', {
    method: 'POST',
    headers,
    body: JSON.stringify(click),
  });
}
