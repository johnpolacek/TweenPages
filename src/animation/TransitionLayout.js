import { gsap } from "gsap"
import { TransitionContext } from "../context/TransitionContext"
import { useState, useContext, useRef } from "react"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, background } = useContext(TransitionContext)
  const el = useRef()

  console.log("TransitionLayout background", background)

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      timeline.play().then(() => {
        setDisplayChildren(children)
      })
    }
  }, [children])

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      background,
      duration: 1,
    })
  }, [background])

  return <div ref={el}>{displayChildren}</div>
}
