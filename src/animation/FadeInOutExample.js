import { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const FadeInOut = ({ children }) => (
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  // useIsomorphicLayoutEffect to avoid console warnings
  useIsomorphicLayoutEffect(() => {
    // intro animation will play immediately
    gsap.to(el.current, {
      opacity: 1,
      duration: 1,
    })

    // add outro animation to top-level outro animation timeline
    timeline.add(
      gsap.to(el.current, {
        opacity: 0,
        duration: .5,
      }),
      0
    )
  }, [])

  // set initial opacity to 0 to avoid FOUC for SSR
  <Box ref={el} sx={{opacity: 0}}>
    {children}
  </Box>
)

export default FadeInOut
