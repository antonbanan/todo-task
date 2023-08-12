"use client"

export default function Error({error, reset}: {error: Error, reset: () => void}) {
    return <div>error <button onClick={reset}>Try again</button></div>
  }