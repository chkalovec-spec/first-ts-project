import React, { useEffect, useState } from 'react'

export const Clock: React.FC = () => {
  const [time, setTime] = useState<TimerHandler>(new Date().toLocaleTimeString())

  useEffect(() => {
    const tick = setInterval(timeHandler, 1000)
    return () => {
      clearInterval(tick)
    }
  }, [])

  const timeHandler = () => setTime(new Date().toLocaleTimeString())

  return <>{time}</>
}
