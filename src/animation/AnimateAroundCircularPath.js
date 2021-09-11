import React, { useContext, useRef } from "react"
import { gsap } from "gsap"
import { Flex, Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import { TransitionContext } from "../context/TransitionContext"

gsap.registerPlugin(MotionPathPlugin)

const AnimateAroundCircularPath = ({ children, radius, duration }) => {
  const r = radius || 200
  const d = duration || 40
  const { timeline } = useContext(TransitionContext)

  const containerEl = useRef()

  useIsomorphicLayoutEffect(() => {
    timeline.add(
      gsap.to(containerEl.current, {
        opacity: 0,
        duration: 0.01,
      }),
      0
    )
  })

  return (
    <Box
      ref={containerEl}
      sx={{ position: "relative", width: "100%", height: "100%" }}
    >
      {React.Children.map(children, (child, i) => {
        const el = useRef()
        useIsomorphicLayoutEffect(() => {
          const tl = gsap
            .timeline({ repeat: -1, repeatDelay: 0, delay: 0 })
            .add(
              gsap.to(
                el.current,
                d,
                {
                  motionPath: {
                    path: `M ${-r}, 0
                 a ${r},${r} 0 1,0 ${r * 2},0
                 a ${r},${r} 0 1,0 -${r * 2},0z`,
                  },
                  repeat: -1,
                  ease: "none",
                },
                0
              )
            )
          tl.seek(d * (i / children.length))
        })
        return (
          <Flex
            ref={el}
            sx={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {React.cloneElement(child, {
              style: { ...child.props.style },
            })}
          </Flex>
        )
      })}
    </Box>
  )
}

export default React.memo(AnimateAroundCircularPath)
