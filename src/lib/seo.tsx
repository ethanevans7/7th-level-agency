import type { Metadata } from 'next';
import Link from 'next/link';
export const origin=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3007';
export function meta(title:string,description:string,path:string):Metadata{return {title,description,alternates:{canonical:path},openGraph:{title,description,url:path,images:[{url:'/opengraph-image',width:1200,height:630,alt:'7th Level Agency — Technology × Storytelling'}]}}}
export function Breadcrumbs({items}:{items:{name:string;href?:string}[]}){return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item,i)=><span key={i}>/ &nbsp;{item.href?<Link href={item.href}>{item.name}</Link>:item.name}</span>)}</nav>}
export function JsonLd({data}:{data:Record<string,unknown>}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>}
