import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import AnimateInOut from "./AnimateInOut"

const RotateInFadeOut = ({
  duration,
  children,
  rotation,
  offsetX,
  offsetY,
  delay,
}) => (
  <AnimateInOut
    as="div"
    durationIn={duration}
    durationOut={0.25}
    delay={delay}
    set={{ rotation, x: offsetY || 0, y: offsetY || 0 }}
    from={{
      opacity: 0,
      ease: "power4.out",
    }}
    to={{
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default RotateInFadeOut
