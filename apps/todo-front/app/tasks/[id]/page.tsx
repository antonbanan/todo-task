
'use client'

import { useEffect, useState } from "react";
import { TaskCard } from "../../components/TaskCard";
import { LoadingOverlay } from "@mantine/core";

export default function TaskPage({ params }: any) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (<>
            {isClient ?  <TaskCard id={params.id}/> : <LoadingOverlay visible={!isClient} overlayBlur={500} transitionDuration={500}/>}
          </>
  );
}
