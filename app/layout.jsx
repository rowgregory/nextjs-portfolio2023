import { ProjectProvider } from './context/projectContext.jsx'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { UserProvider } from './context/userContext.jsx'
import SessionProvider from './components/SessionProvider.jsx'
import { LogoClicksProvider } from './context/logoClicksContext.jsx'
import PageWrapper from './page-wrapper.jsx'
import { VERCEL_BASE } from './../public/urls.js'

const monserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(VERCEL_BASE),
  title: 'Gregory Row',
  description: 'Thanks for being here.',
  openGraph: {
    title: 'Gregory Row portfolio',
    description: 'Portfolio to showcase projects',
    url: 'https://www.gregoryrow.com',
    siteName: 'Gregory Row',
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monserrat.className}`}>
        <UserProvider>
          <SessionProvider>
            <ProjectProvider>
              <LogoClicksProvider>
                <div className="fixed bottom-0 top-0 right-0 left-0">
                  <PageWrapper>{children}</PageWrapper>
                </div>
              </LogoClicksProvider>
            </ProjectProvider>
          </SessionProvider>
        </UserProvider>
      </body>
    </html>
  )
}
