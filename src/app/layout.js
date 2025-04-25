export const metadata = {
  title: 'woody',
  description: 'woody the little terro- cutie pie',
}
import Script from "next/script";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import AffiliatePlacement from "./AffiliatePlacement";
import AffiliatePlacement3 from "./AffiliatePlacementRegery";
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
        <AffiliatePlacement />
        {children}
        </div>
        <AffiliatePlacement />
        <div className="fixed bottom-0 w-full">
        <a href="https://regery.com/en?pr=hmuhlyc">
          <img src="/domains1.gif" />
</a>
        </div>
        <div className="mb-24">
          <AffiliatePlacement3/>  
        </div>        <Analytics />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "f55ea00841c04ae394cf33069bca66e0"}'></script>
        <Script src="/loadaff.js"/>

        </body>
    </html>
  )
}
