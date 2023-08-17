// import { TasksGrid } from '../components/TasksGrid';
// import CreateTask from '../components/CreateTask';

// export default async function TaskPage() {
//   return (<>
//     <TasksGrid/>
//     <CreateTask/>
//   </>
//   );
// }


"use client"

import { TasksGrid } from '../components/TasksGrid';
import CreateTask from '../components/CreateTask';
import { useEffect, useState } from 'react';
import { LoadingOverlay } from '@mantine/core';

export default function TaskPage() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (<>
            {isClient ?  <><TasksGrid/><CreateTask/></> : <LoadingOverlay visible={!isClient} overlayBlur={500} transitionDuration={500}/>}
          </>
  );
}