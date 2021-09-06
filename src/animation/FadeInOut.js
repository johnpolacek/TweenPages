import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TimelineContext } from "../context/TimelineContext"

const FadeInOut = ({ children }) => {
  const { timeline } = useContext(TimelineContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      opacity: 1,
      duration: 0.5,
    })
  }, [])

  timeline.add(
    gsap.to(el.current, {
      opacity: 0,
      duration: 0.25,
    })
  )

  return (
    <Box sx={{ opacity: 0 }} ref={el}>
      {children}
    </Box>
  )
}

export default FadeInOut
