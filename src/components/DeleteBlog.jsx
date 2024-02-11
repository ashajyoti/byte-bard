'use client'
import deleteBlog from '@/firebase/firestore/deleteData';
import { Button } from '@nextui-org/react';



export default  function DeleteButton(id) {
    const handleDeleteClick = async() =>{
        console.log('working',id);
        const res = await deleteBlog(id)
    }
  return (
    <div>
        <Button onClick={handleDeleteClick} className='font-medium'>Delete</Button>
    </div>
  )
}
