
// import { Html, Head, Main, NextScript } from 'next/document'
import Heads from '../components/Heads';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

     
       <Heads />
      <body>
        {children}

      </body>
    </html>
  )
}
