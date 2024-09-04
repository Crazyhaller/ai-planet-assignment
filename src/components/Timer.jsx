import React, { useEffect, useState } from 'react'

const Timer = ({ hackathon }) => {
  const calculateTimeLeft = () => {
    const now = new Date()
    const startDate = new Date(hackathon.startDate)
    const endDate = new Date(hackathon.endDate)
    let timeLeft = {}

    if (hackathon.status === 'upcoming') {
      const difference = +startDate - +now
      timeLeft = {
        type: 'Starts in',
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      }
    } else if (hackathon.status === 'active') {
      const difference = +endDate - +now
      timeLeft = {
        type: 'Ends in',
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, index) => {
    if (interval === 'type' || !timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <React.Fragment key={interval}>
        <div className="flex flex-col items-center mx-1">
          <div className="bg-gray-200 text-cyan-900 rounded-lg px-3 py-1 font-bold text-sm md:text-base">
            {timeLeft[interval]}
          </div>
          <div className="text-xs md:text-sm">{interval}</div>
        </div>
        {index < Object.keys(timeLeft).length - 1 && (
          <div className="text-cyan-900 font-bold mx-1">:</div>
        )}
      </React.Fragment>
    )
  })

  return (
    <div className="flex flex-col items-center">
      {timeLeft.type && (
        <div className="font-bold text-gray-500 mb-2 text-sm md:text-base">
          {timeLeft.type}
        </div>
      )}
      {timerComponents.length ? (
        <div className="flex justify-center flex-wrap">{timerComponents}</div>
      ) : (
        <div className="text-center">
          <span className="font-bold text-gray-500 mb-2 text-sm md:text-base">
            Ended on:
          </span>
          <br />
          <span className="font-bold text-gray-500 text-sm md:text-base">
            {new Date(hackathon.endDate).toLocaleString()}
          </span>
        </div>
      )}
    </div>
  )
}

export default Timer
