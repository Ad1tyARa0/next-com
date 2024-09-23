import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lama Dev E-Commerce Application',
  description: 'A complete e-commerce application with Next.js and Wix',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <header>
            <Navbar />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}
