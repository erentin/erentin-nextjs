import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

// @fontsource/roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eren Tın | Software Developer',
  description: 'Designed by Eren Tın',
}



export default function RootLayout({ children }) {
  return (

  <html>
    <Head>
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

          

    </Head>
  
   
    <body className={inter.className}>
      {children}
    </body>
  </html>
    
  )
}
