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
           <ContentAction eachDoc={eachDoc}/>
            {eachDoc?.data?.slug}
        </div>
    )
}