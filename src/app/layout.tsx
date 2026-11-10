import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer } from '@/components/site';
import './globals.css';
const origin=process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3007';
export const metadata: Metadata = {metadataBase:new URL(origin),title:{default:'7th Level Agency — Technology × Storytelling',template:'%s | 7th Level Agency'},description:'A Richmond, Virginia creative and technology agency. Websites, mobile apps, custom software, film, and video production. Built with purpose. Made to move people.',openGraph:{type:'website',siteName:'7th Level Agency',locale:'en_US'},robots:{index:process.env.SITE_INDEXABLE==='true',follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){const ga=process.env.NEXT_PUBLIC_GA_ID;return <html lang="en"><body id="top"><a href="#main" className="skip-link">Skip to content</a><Header/>{children}<Footer/>{ga&&/^G-[A-Z0-9]+$/.test(ga)&&<><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive"/><Script id="analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}</Script></>}</body></html>}
