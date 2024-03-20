import { Outlet } from 'react-router-dom'

import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from '@remix-run/react'

import styles from 'tailwind.css'
import themeStyles from './theme.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap'
  },
  { rel: 'stylesheet', href: themeStyles },
  { rel: 'stylesheet', href: styles }
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
