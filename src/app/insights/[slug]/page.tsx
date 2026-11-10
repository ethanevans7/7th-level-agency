import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';
import { Breadcrumbs,meta } from '@/lib/seo';
import { CTA } from '@/components/site';
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);return a?meta(a.title,a.intro,`/insights/${slug}`):{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);if(!a)notFound();return <main id="main"><article className="article"><Breadcrumbs items={[{name:'Insights',href:'/insights'},{name:'Project planning'}]}/><span className="eyebrow">{a.category}</span><h1>{a.title}</h1><p>{a.intro}</p>{a.sections.map(([h,p],i)=><section key={h}><h2>{i+1}. {h}</h2><p>{p}</p></section>)}</article><CTA/></main>}
