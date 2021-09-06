import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const AnimateInOut = ({ children, as, from, to, durationIn, durationOut }) => {
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      ...to,
      duration: durationIn,
    })

    timeline.add(
      gsap.to(el.current, {
        ...from,
        duration: durationOut,
      })
    )
  }, [])

  return (
    <Box as={as} sx={from} ref={el}>
      {children}
    </Box>
  )
}

export default AnimateInOut
