'use client'
import { time } from 'node:console';
import React, { useEffect, useState } from 'react'

function Timer() {
    const [Timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const formatTime = (t: number) => {
    const hours = Math.floor(t / 3600)
    const minutes = Math.floor((t % 3600) / 60)
    const seconds = t % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const startTimer = () => {
    setIsActive(true);
  }

  const resetTimer = () => {
    setIsActive(false);
    setTimer(0);
  }

  const pauseTimer = () => {
    setIsActive(false);
  }

  useEffect(() => {
    if (!isActive) return;
    let interval: NodeJS.Timeout | null = null
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    } else if (!isActive && interval) {
      clearInterval(interval)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive])

  return (
    <div className='flex flex-col items-center gap-5 w-2/3 
    bg-gradient-to-tr from-gray-400 to-white'>
        <h1 className='mt-20 mb-10 text-4xl '>TiCK ToCK</h1>
        <p>Get ready for the countdown!</p>
        <button className='border-3 p-2 rounded-md bg-green-300 
        hover:bg-green-400 hover:scale-110' onClick={startTimer} disabled={isActive}>
            Start Timer
        </button>
        <div className='flex gap-3'>
           <h1>Timer:</h1> <span>{formatTime(Timer)}</span>
        </div>
        <div className='flex gap-5'>
            <button className='border-3 p-2 rounded-md bg-red-300 
            hover:bg-red-400 hover:scale-110' onClick={resetTimer}>Reset Timer</button>
            <button className='border-3 p-2 rounded-md bg-blue-200 hover:bg-blue-400 
            hover:scale-110' onClick={pauseTimer}>Pause Timer</button>
        </div>
        
    </div>
  )
}

export default Timer
