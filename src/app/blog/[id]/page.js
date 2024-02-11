import Header from '@/components/Header';

import Footer from '@/components/Footer';

import BlogPage from '@/components/BlogPage';


export default async function Page({params}) {
  return (
    <div>
   <Header />
  <BlogPage id={params.id}/>
   <Footer />
    </div>
  )
}
