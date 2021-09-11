import React, { useRef } from "react"
import { gsap } from "gsap"
import { Flex, Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

const AnimateAroundCircularPath = ({ children, radius, duration }) => {
  const r = radius || 200
  const d = duration || 20

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {React.Children.map(children, (child, i) => {
        const el = useRef()
        useIsomorphicLayoutEffect(() => {
          console.log("progress " + i / children.length)
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

export default AnimateAroundCircularPath
