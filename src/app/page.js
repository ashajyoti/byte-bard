
import Header from '@/components/Header';
import CreateBlog from '@/components/CreateBlog';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';

export default async function Page() {
  return (
    <div>
   <Header />
   <HeroBanner />
   <CreateBlog />
   <Footer />
    </div>
  )
}
