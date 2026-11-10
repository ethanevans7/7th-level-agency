import { ImageResponse } from 'next/og';
export const alt='7th Level Agency — Technology × Storytelling';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',width:'100%',height:'100%',background:'#111210',color:'#eeede6',padding:75,flexDirection:'column',justifyContent:'space-between',fontFamily:'sans-serif'}}><div style={{display:'flex',fontSize:24,letterSpacing:4}}>7TH LEVEL AGENCY</div><div style={{display:'flex',flexDirection:'column',fontSize:95,lineHeight:1.05,letterSpacing:-5}}><span>We build what’s next.</span><span style={{color:'#ed7045'}}>We create what moves people.</span></div><div style={{display:'flex',fontSize:18,letterSpacing:3}}>TECHNOLOGY × STORYTELLING · RICHMOND, VA</div></div>,size)}
