// const baseURL = 'http://localhost:3200';
// const baseURL = 'http://172.24.0.12:3200';
const baseURL = 'http://todo-app.default.svc.cluster.local:3200';
const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*" 
}


export async function getAllTasks() {
  return await fetch(`${baseURL}/tasks`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*" 
    },
  });
}


export async function getTask(id:string) {
  return await fetch(`${baseURL}/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
    });
}


export async function updateTask(id:string, data:object) {
  return await fetch(`${baseURL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*" 
    },
    body: JSON.stringify(data),
  });
}


export async function deleteTask(id:string) {
  return await fetch(`${baseURL}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*" 
    },
  });
}


export async function createTask(data: object) {
  return await fetch(`${baseURL}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*" 
    },
    body: JSON.stringify(data),
  });
}
