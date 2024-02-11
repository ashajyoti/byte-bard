'use client'
import DeleteButton from "./DeleteBlog";
import UpdateBlog from "./EditBlog";
import { useAuthContext } from "@/context/AuthContext";


export default function ContentAction({eachDoc}) {
    const { user } = useAuthContext();

    return (
        <div>

            {(user?.uid === eachDoc.data.userId) ?
                <>
                    <DeleteButton id={eachDoc?.id} />
                    <UpdateBlog id={eachDoc?.id} blogTitle={eachDoc?.data.title} blogDesc={eachDoc?.data.description}/>
                </>
                : <></>
            }
        </div>
    )
}