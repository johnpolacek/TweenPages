import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import AnimateInOut from "./AnimateInOut"

const ScaleInOut = ({ children, delay, as }) => (
  <AnimateInOut
    as={as || "div"}
    durationIn={1}
    durationOut={0.25}
    delay={delay}
    set={{
      opacity: 0,
      scale: 0.01,
    }}
    from={{
      opacity: 0,
      scale: 0.01,
    }}
    to={{
      opacity: 1,
      scale: 1,
      ease: "elastic.out",
    }}
  >
    {children}
  </AnimateInOut>
)

export default ScaleInOut
