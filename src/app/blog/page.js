
import Header from '@/components/Header';
import CreateBlog from '@/components/CreateBlog';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';


export default async function Page() {
  return (
    <div>
   <Header />
   <CreateBlog />
   <BlogList />
   <Footer />
    </div>
  )
}
