import type { MetadataRoute } from 'next';
import { origin } from '@/lib/seo';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',...(process.env.SITE_INDEXABLE==='true'?{allow:'/',disallow:['/thank-you']}:{disallow:'/'} )},sitemap:`${origin}/sitemap.xml`}}
