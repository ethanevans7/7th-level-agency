import Intake from '@/components/intake';
import { meta } from '@/lib/seo';
export const metadata=meta('Start a Project','Tell 7th Level Agency about your website, app, software, film, or video project. Let’s discuss your next move.','/start-a-project');
export default function Page(){const id=process.env.FORMSPREE_FORM_ID;const endpoint=id&&/^[a-zA-Z0-9]+$/.test(id)?`https://formspree.io/f/${id}`:undefined;return <Intake endpoint={endpoint}/>}
