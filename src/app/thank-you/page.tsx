import { Receipt } from '@/components/receipt';
export const metadata={title:'Your Project Inquiry',robots:{index:false,follow:false}};
export default function Thanks(){const url=process.env.SCHEDULING_URL;return <Receipt schedulingUrl={url?.startsWith('https://')?url:undefined}/>}
