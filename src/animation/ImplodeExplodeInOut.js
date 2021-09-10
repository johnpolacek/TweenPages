import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { SplitText } from "gsap/dist/SplitText"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import { randomNumber } from "./util"

gsap.registerPlugin(SplitText)

const ImplodeExplodeInOut = ({
  children,
  target,
  delay,
  durationIn,
  durationOut,
}) => {
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    const splitText = new SplitText(target)
    const chars = splitText.chars
    chars.forEach((char) => {
      // intro animation
      gsap.fromTo(
        char,
        {
          x: randomNumber(-2000, 2000),
          y: randomNumber(-1000, 1000),
          z: randomNumber(100, 100),
          opacity: 0,
          rotation: randomNumber(360, 720),
          rotationX: randomNumber(-360, 360),
          rotationY: randomNumber(-360, 360),
          ease: "power4.out",
        },
        {
          x: 0,
          y: 0,
          z: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          duration: 1,
          delay: 1 + Math.random() * 0.5,
          ease: "power4.out",
        }
      )

      // outro animation
      timeline.add(
        gsap.to(char, 1, {
          x: randomNumber(-2000, 2000),
          y: randomNumber(-1000, 1000),
          z: randomNumber(100, 100),
          opacity: 0,
          rotation: randomNumber(360, 720),
          rotationX: randomNumber(-360, 360),
          rotationY: randomNumber(-360, 360),
          ease: "power4.in",
          duration: 0.1,
        }),
        0
      )
    })

    gsap.set(el.current, {
      opacity: 1,
    })
  }, [])

  return (
    <Box sx={{ opacity: 0 }} ref={el}>
      {children}
    </Box>
  )
}

export default ImplodeExplodeInOut
