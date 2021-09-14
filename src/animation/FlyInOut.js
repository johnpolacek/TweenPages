import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import AnimateInOut from "./AnimateInOut"

const FlyInOut = ({ children, delay, delayOut, down, x, y, as }) => (
  <AnimateInOut
    as={as || "div"}
    durationIn={1.5}
    durationOut={0.25}
    delay={delay}
    delayOut={delayOut || 0}
    from={{
      transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
      ease: "power4.out",
    }}
    to={{
      x: 0,
      y: 0,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default FlyInOut
