import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const FadeInUp = ({ as, children, duration, delay, y }) => {
  const el = useRef()

  gsap.set(el.current, { y: y || 20 })

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      y: 0,
      opacity: 1,
      delay: delay || 0,
      duration: duration || 0.5,
      ease: "back.out",
    })
  }, [])

  return (
    <Box as={as} sx={{ opacity: 0 }} ref={el}>
      {children}
    </Box>
  )
}

export default React.memo(FadeInUp)
