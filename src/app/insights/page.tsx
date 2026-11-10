import Link from 'next/link';
import { Arrow,CTA } from '@/components/site';
import { articles } from '@/lib/articles';
import { Breadcrumbs,meta } from '@/lib/seo';
export const metadata=meta('Insights — Notes on Making Things','Practical project planning notes on websites, software, apps, and production from 7th Level Agency.','/insights');
export default function Page(){return <main id="main"><section className="page-hero"><Breadcrumbs items={[{name:'Insights'}]}/><span className="eyebrow">A LITTLE PERSPECTIVE GOES A LONG WAY.</span><h1>Notes on<br/><em>making things.</em></h1><p className="lead">Practical ideas for the decisions that come before the design, the code, or the camera.</p></section><section className="page-content">{articles.map(a=><Link href={`/insights/${a.slug}`} className="insight-card" key={a.slug}><span>{a.category}</span><div><h3>{a.title}</h3><p>{a.intro}</p></div><Arrow/></Link>)}</section><CTA/></main>}
