import { NextResponse } from 'next/server.js'
import { prisma } from '../../db.js'

export async function GET(request) {}

export async function POST(request) {
  const url = new URL(request.url)
  const query = url.searchParams.get('endpoint')

  if (request.method === 'POST') {
    const clickType = await request.json()

    if (query === 'clicks') {
      console.log('ADDING TO DB')
      await prisma.clicks.update({
        where: { clickType: 'click-table' },
        data: {
          [clickType]: {
            increment: 1
          }
        }
      })

      return NextResponse.json({})
    } else {
      // Invalid endpoint
      return new Response('Invalid endpoint', { status: 400 })
    }
  } else {
    // Not a POST request
    return new Response('Invalid request method', { status: 405 })
  }
}
