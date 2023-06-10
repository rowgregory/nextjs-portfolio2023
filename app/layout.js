import Header from './components/Header.jsx';
import './globals.css';
import { Inter } from 'next/font/google';
import { UserProvider } from './context/userContext.jsx';
import SessionProvider from './components/SessionProvider.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Little Paws Dachshund Rescue',
  description: 'Dachshund Rescue',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <UserProvider>
          <SessionProvider>
            <Header />
            <main>{children}</main>
          </SessionProvider>
        </UserProvider>
      </body>
    </html>
  );
}
