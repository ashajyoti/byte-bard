import { getAllDoument } from "@/firebase/firestore/getData";
import ContentAction from "./ContentAction";


export default async function BlogPage({ id }) {
    const response = await getAllDoument('blog')
    const document = response.documents
    const eachDoc = document.find(item => {
        return item.data.slug === id
    })
    return (
        <div>
            <ContentAction eachDoc={eachDoc} />
            <section class="bg-white dark:bg-gray-900">
          
                <div class="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1  lg:px-6">
                <div class="grid w-6/12 gap-4 mt-8">
                        <img class="w-full rounded-lg h-60"
                         src={eachDoc?.data?.image} alt={eachDoc?.data?.slug}/>
                    
                    </div>
                    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {eachDoc?.data?.title}</h2>
                        <p class="mb-4">{eachDoc?.data?.description}</p>
                    </div>
                    
                    </div>
            </section>
        </div>
    )
}