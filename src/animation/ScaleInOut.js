import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import AnimateInOut from "./AnimateInOut"

const ScaleInOut = ({
  children,
  delay,
  as,
  scale,
  ease,
  duration,
  x,
  y,
  skipOutro,
  scaleTo,
  xTo,
  yTo,
}) => {
  const s = scale || 0.01
  const e = ease || "elastic.out"
  const d = duration || 1
  const sTo = scaleTo || 1

  return (
    <AnimateInOut
      as={as || "div"}
      durationIn={d}
      durationOut={d / 4}
      delay={delay}
      skipOutro={skipOutro}
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
        scale: sTo,
        ease: e,
        x: xTo || 0,
        y: yTo || 0,
      }}
    >
      {children}
    </AnimateInOut>
  )
}

export default ScaleInOut
