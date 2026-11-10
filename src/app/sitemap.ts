import type { MetadataRoute } from 'next';
import { services,projects } from '@/lib/content';
import { articles } from '@/lib/articles';
import { origin } from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{return ['','/about','/services','/technology','/production','/work','/insights','/start-a-project','/privacy',...services.map(s=>`/services/${s.slug}`),...projects.map(p=>`/work/${p.slug}`),...articles.map(a=>`/insights/${a.slug}`)].map(path=>({url:`${origin}${path}`,changeFrequency:'monthly',priority:path===''?1:.7}))}
