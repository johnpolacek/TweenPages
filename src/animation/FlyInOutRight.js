import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import AnimateInOut from "./AnimateInOut"

const FlyInOutRight = ({ children }) => (
  <AnimateInOut
    as="div"
    durationIn={2}
    durationOut={0.25}
    from={{
      transform: "translate(100px, 0px)",
      opacity: 0,
      duration: 0.25,
      ease: "power4.out",
    }}
    to={{
      opacity: 1,
      x: 0,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default FlyInOutRight
