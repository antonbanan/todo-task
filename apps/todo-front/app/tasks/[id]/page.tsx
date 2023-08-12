// import styles from '../CreateNote';
'use client';

import React, {useState, useEffect} from "react"
import { TaskCard } from "../../components/TaskCard";
import type { Task } from '../../interfaces';


async function getTask(taskId: string) {
  const res = await fetch(
    `http://127.0.0.1:3200/tasks/${taskId}`
  );
  const data = await res.json();
  return data;
}

export default function TaskPage({ params }: any) {
  const [task, setTask] = useState(<span>Lodding.....</span>);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:3200/tasks/${params.id}`);
      const json = await res.json();
      console.log(json)
      setTask(<TaskCard data={json}/>);
    };

    fetchData();
  }, []);

  return (
    <div>
      {task}
    </div>
  );
}
