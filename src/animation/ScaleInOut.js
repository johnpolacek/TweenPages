import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import AnimateInOut from "./AnimateInOut"

const ScaleInOut = ({ children, delay, as, scale, ease, duration, x, y }) => {
  const s = scale || 0.01
  const e = ease || "elastic.out"
  const d = duration || 1

  return (
    <AnimateInOut
      as={as || "div"}
      durationIn={d}
      durationOut={d / 4}
      delay={delay}
      set={{
        opacity: 0,
        scale: s,
        x: x || 0,
        y: y || 0,
      }}
      from={{
        opacity: 0,
        scale: s,
        x: x || 0,
        y: y || 0,
      }}
      to={{
        opacity: 1,
        scale: 1,
        ease: e,
        x: 0,
        y: 0,
      }}
    >
      {children}
    </AnimateInOut>
  )
}

export default ScaleInOut
