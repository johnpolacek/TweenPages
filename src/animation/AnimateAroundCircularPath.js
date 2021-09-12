import React, { useContext, useRef } from "react"
import { gsap } from "gsap"
import { Flex, Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import { TransitionContext } from "../context/TransitionContext"

gsap.registerPlugin(MotionPathPlugin)

const AnimateAroundCircularPath = ({ children, width, height, duration }) => {
  const w = width || 200
  const h = height || 200
  const d = duration || 40
  const { timeline } = useContext(TransitionContext)

  const containerEl = useRef()

  const x0 = -w / 2
  const x1 = 0
  const x2 = w / 2
  const y0 = -h / 2
  const y1 = 0
  const y2 = h / 2

  const top = `${x1} ${y0}`
  const middle = `${x1} ${y1}`
  const bottom = `${x1} ${y2}`
  const left = `${x0} ${y1}`
  const right = `${x2} ${y1}`

  const path =
    `M ${left} ` +
    `C ${left} ${x0} ${y0} ${top} ` +
    `C ${top} ${x2} ${y0} ${right} ` +
    `C ${right} ${x2} ${y2} ${bottom} ` +
    `C ${bottom} ${x0} ${y2} ${left} ` +
    `Z`

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
                  motionPath: { path },
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
            {React.cloneElement(child)}
          </Flex>
        )
      })}
    </Box>
  )
}

export default React.memo(AnimateAroundCircularPath)
