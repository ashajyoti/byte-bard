import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@nextui-org/react';


export default async function Page() {
  return (
    <div>
   <Header />
   <div className='error-page'>
   <p>Currently page is not available.</p>
   <Button>
   <Link href={'/'}>Home</Link>
   </Button>
   </div>
   <Footer />
    </div>
  )
}