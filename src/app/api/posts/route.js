import addData from "@/firebase/firestore/addData"

export async function POST(req) {
   const values = await req.json();
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    //   body: JSON.stringify({ time: new Date().toISOString() }),
    // })
    const response = await addData('blog', 'posts', values)
    // const data = await response.json()
    console.log('res',response);
    return Response.json(null)
  }