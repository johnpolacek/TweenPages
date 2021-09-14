import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import AnimateInOut from "./AnimateInOut"

const FadeInOutUp = ({ children, delay, y, durationIn, durationOut }) => (
  <AnimateInOut
    as="div"
    durationIn={durationIn || 2}
    durationOut={durationOut || 0.25}
    delay={delay}
    from={{
      transform: "translate(0px, " + (y || 40) + "px)",
      opacity: 0,
      duration: 0.25,
      ease: "power4.out",
    }}
    to={{
      opacity: 1,
      y: 0,
      ease: "power4.out",
      delay: 0.5,
    }}
  >
    {children}
  </AnimateInOut>
)

export default FadeInOutUp
