import { deleteTask, getTask, updateTask } from "apps/todo-front/app/services/api";
import { NextResponse } from "next/server";


export async function DELETE(req: Request, res: Response) {
  try {
    const id = req.url.split('server-tasks/')[1];
		const res = await deleteTask(id);

    if(res.status === 400){
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    if(res.status === 500) throw new Error('Server error');

    const deletedTask = await res.json();
    return NextResponse.json({message: 'OK', deletedTask}, {status: 200})
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {message: 'Error', error}, {status: 500}
    )
  }
  
}

export async function PUT(req: Request, res: Response) {
  const id = req.url.split('server-tasks/')[1];
	const {title, body} = await req.json();
  try {
    const res = await updateTask(id, {title, body});
    
    if(res.status === 400){
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    if(res.status === 500) throw new Error('Server error');

    const updatedTask = await res.json();
		
		return NextResponse.json({message: 'OK', updatedTask}, {status: 200})
  } catch (error) {
		console.log(error)
    return NextResponse.json(
      {message: 'Error', error}, {status: 500}
    )
  }  
}


export async function GET(req: Request, res: Response) {
  const id = req.url.split('server-tasks/')[1];
  try {
    const res = await getTask(id);
    
		if(res.status === 400){
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    if(res.status === 500) throw new Error('Server error');

    const task = await res.json();
		
		return NextResponse.json({message: 'OK', task}, {status: 200})
  } catch (error) {
		console.log(error)
    return NextResponse.json(
      {message: 'Error', error}, {status: 500}
    )
  } 
}