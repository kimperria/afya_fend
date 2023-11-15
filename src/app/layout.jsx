import { Inter } from 'next/font/google';
import MUIProvider from './_providers/MUIProvider';
import StoreProvider from './_providers/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Afya App',
  description: 'Digital Health Application'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <MUIProvider>{children}</MUIProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
