import { CTA,WorkGrid } from '@/components/site';
import { Breadcrumbs,meta } from '@/lib/seo';
export const metadata=meta('Selected Work — Digital Products & Productions','Explore Partaay, Indie Tube, and the production portfolio of 7th Level Agency in Richmond, Virginia.','/work');
export default function Work(){return <main id="main"><section className="page-hero"><Breadcrumbs items={[{name:'Our work'}]}/><span className="eyebrow">THE IDEA IS ONLY THE BEGINNING.</span><h1>Built with purpose.<br/><em>Made to make a mark.</em></h1><p className="lead">Digital products and screen stories. Explore the projects at the intersection of technology, creativity, and execution.</p></section><section className="page-content"><WorkGrid/></section><CTA/></main>}
