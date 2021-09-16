import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import AnimateInOut from "./AnimateInOut"
import { randomNumber } from "./util"

const RotateInOut3D = ({
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
    set={{
      transformOrigin: "50% 50%",
      perspective: 10,
      rotationX: randomNumber(-80, 80),
      rotationY: randomNumber(-40, 40),
      rotationZ: randomNumber(-10, 10),
      x: offsetX || 0,
      y: offsetY || 0,
      scale: 0.8,
      opacity: 0,
    }}
    from={{
      opacity: 0,
      ease: "power4.out",
      rotationX: randomNumber(-80, 80),
      rotationY: randomNumber(-40, 40),
      rotationZ: randomNumber(-10, 10),
      x: offsetX || 0,
      y: offsetY || 0,
    }}
    to={{
      opacity: 1,
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scale: 1,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default RotateInOut3D
