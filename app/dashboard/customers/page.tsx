
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Customers',
  description: 'Customers of the official Next.js Course',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 

export default function Page() {
    return <p>Customers Page</p>;
  }