
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import { getAllDoument } from "@/firebase/firestore/getData";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default async function Page() {
  const response = await getAllDoument('blog')
  const document = response.documents.slice(0,4);
  return (
    <div>
   <Header />
   <HeroBanner />
   <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-6 justify-items-center items-center">
      {document.map((item, index) => (
        <Link href={`/blog/${item.data.slug}`}>
          <Card shadow="sm" key={index} className="max-w-[300px]" >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.data.title}
                className="w-full object-cover h-[140px]"
                src={item.data.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between flex-col">
              <h2>{item.data.title}</h2>
              <p className="text-default-500">{item.data.description}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
   <Footer />
    </div>
  )
}
