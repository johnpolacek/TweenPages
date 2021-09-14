import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const FadeIn = ({ as, children, duration, delay, x, y, ease }) => {
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      x: 0,
      y: 0,
      opacity: 1,
      delay: delay || 0,
      duration: duration || 0.5,
      ease: ease || "power4.out",
    })
  }, [])

  return (
    <Box
      as={as || "div"}
      sx={{
        opacity: 0,
        transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
      }}
      ref={el}
    >
      {children}
    </Box>
  )
}

export default FadeIn
