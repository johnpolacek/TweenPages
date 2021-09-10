import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const AnimateInOut = ({
  children,
  as,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  set,
}) => {
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    // intro animation
    if (set) {
      gsap.set(el.current, { ...set })
    }
    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
    })

    // outro animation
    timeline.add(
      gsap.to(el.current, {
        ...from,
        duration: durationOut,
      }),
      0
    )
  }, [])

  return (
    <Box as={as} sx={from} ref={el}>
      {children}
    </Box>
  )
}

export default AnimateInOut
