import { createTask, getAllTasks } from "apps/todo-front/app/services/api";
import { NextResponse } from "next/server";


export async function GET(req: Request, res: Response) {
  try {
    const res = await getAllTasks();
    if(res.status === 400){
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    if(res.status === 500) throw new Error('Server error');
    const tasks = await res.json();
    return NextResponse.json({message: 'OK', tasks}, {status: 200})
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {message: 'Error', error}, {status: 500}
    )
  }
  
}

export async function POST(req: Request, res: Response) {
  try {
    const {title, body} = await req.json();
    const res = await createTask({title, body});
    
    if(res.status === 400){
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    if(res.status === 500) throw new Error('Server error');
    const newTask = await res.json();
    return NextResponse.json({message: 'OK', newTask}, {status: 200})
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {message: 'Error', error}, {status: 500}
    )
  }  
}

