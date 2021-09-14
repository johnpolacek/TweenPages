import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import AnimateInOut from "./AnimateInOut"

const FlyInOutLeft = ({ children, delay, left }) => (
  <AnimateInOut
    as="div"
    durationIn={1.5}
    durationOut={0.25}
    delay={delay}
    delayOut={delay / 2}
    from={{
      transform: "translate(" + left + "px, 0px)",
      duration: 0.25,
      ease: "power4.out",
    }}
    to={{
      x: 0,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default FlyInOutLeft
