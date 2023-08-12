"use client"

import Link from 'next/link';
import CreateTask from '../components/CreateTask';
import React, {useState, useEffect} from "react"
import type { Task } from '../interfaces';
import { Table } from '@mantine/core';
import { ActionsGrid } from '../components/TasksGrid';

export default function TaskPage() {
  const [Listing, setListing] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://todo-app.default.svc.cluster.local:3200/tasks');
      const json = await res.json();
      console.log(json)
      setListing(json);
      console.log(Listing)
    };

    fetchData();
  }, []);
  

  return( <>
    <ActionsGrid data={Listing}/>
    <CreateTask />
  </>
  );
}
