import addData from "@/firebase/firestore/addData"
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
   const values = await req.json();
    const response = await addData('blog', uuidv4(), values)
    return Response.json(null)
  }
