'use client'

import { useEffect, useState } from "react";
import { AppHomePage } from "./components/Home";
import { LoadingOverlay } from "@mantine/core";


  
  
export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (<>
            {isClient ? <AppHomePage></AppHomePage> : <LoadingOverlay visible={!isClient} overlayBlur={500} transitionDuration={500}/>}
          </>
  );
}

