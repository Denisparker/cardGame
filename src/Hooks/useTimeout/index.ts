import { useEffect, useRef } from 'react'

export default function useTimeout(
  callback: () => void,
  delay: number | null,
  deps: any[]
) {
  const savedCallback = useRef<any>()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
  }, [delay, ...deps])
}
