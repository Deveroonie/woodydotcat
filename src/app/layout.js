export const metadata = {
  title: 'woody',
  description: 'woody the little terro- cutie pie',
}
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </head>
      <body className="bg-gray-800 2xl:flex 2xl:flex-col 2xl:items-center">
        <div className="2xl:w-[60%]">
        <p className="text-lg text-white">Interested in setting up your own website? Check out <a href="https://regery.com/en?pr=hmuhlyc" className="text-orange-500">Regery</a>, with domains starting at just £6 for .cat, and as low as £9 for .com! Domains also include free DNS, as well as WHOIS privacy! <span className="text-xs italic text-gray-500">affiliate link</span></p>
        {children}
        </div>
        <Analytics />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f55ea00841c04ae394cf33069bca66e0"}'></script>
        </body>
    </html>
  )
}
