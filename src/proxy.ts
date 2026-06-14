import { NextRequest, NextResponse } from 'next/server'

const USERNAME = process.env.PREVIEW_USER ?? 'esm'
const PASSWORD = process.env.PREVIEW_PASS ?? 'esm2024'

export function proxy(req: NextRequest) {
  const auth = req.headers.get('authorization')

  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
      const [user, pass] = decoded.split(':')
      if (user === USERNAME && pass === PASSWORD) {
        return NextResponse.next()
      }
    }
  }

  return new NextResponse('Access denied', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="ESM Preview"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|studio/).*)'],
}
