import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../..'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSenconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSenconds / 60)
  const secondsAmount = currentSenconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>
        <div>:</div>
      </Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
