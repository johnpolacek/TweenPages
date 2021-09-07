import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box, Image, Text } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const HomeAnimation = () => {
  const { timeline } = useContext(TransitionContext)
  const greensockRef = useRef()
  const plusRef = useRef()
  const nextJsRef = useRef()

  useIsomorphicLayoutEffect(() => {
    // intro animations
    // ref is an object with a current property that holds the DOM element
    gsap.to(greensockRef.current, {
      opacity: 1,
      delay: 2,
      duration: 1,
      y: 0,
      ease: "elastic.out",
    })

    gsap.to(plusRef.current, {
      opacity: 1,
      rotationY: -720,
      delay: 2.5,
      duration: 1,
      y: 0,
      transformOrigin: "50% 50%",
      ease: "power4.out",
    })

    gsap.to(nextJsRef.current, {
      opacity: 1,
      delay: 3,
      duration: 1,
      y: 0,
      ease: "bounce.out",
    })

    // outro animation
    console.log("add outro")

    timeline.add(
      gsap.to(greensockRef.current, {
        y: -200,
        opacity: 0,
        duration: 0.25,
        ease: "power4.in",
      }),
      0
    )
    timeline.add(
      gsap.to(plusRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power4.in",
      }),
      0
    )
    timeline.add(
      gsap.to(nextJsRef.current, {
        y: 200,
        opacity: 0,
        duration: 0.25,
        ease: "power4.in",
      }),
      0
    )
  }, [])

  return (
    <Box
      sx={{
        height: ["160px", "200px", "240px", "480px", "100%"],
        position: "relative",
      }}
    >
      <Image
        src="/img/greensock.svg"
        sx={{
          position: "absolute",
          top: [0, 0, "-10%", "20%"],
          left: "5%",
          height: ["100%", "100%", "120%", "50%"],
          opacity: 0,
          transform: "translate(0px, 100px)",
        }}
        ref={greensockRef}
      />
      <Text
        sx={{
          fontSize: 8,
          fontWeight: 500,
          position: "absolute",
          top: ["10%", "10%", "10%", "36.5%"],
          transformOrigin: "50% 50%",
          left: "45%",
          opacity: 0,
          display: "block",
        }}
        ref={plusRef}
      >
        +
      </Text>
      <Image
        src="/img/nextjs.svg"
        sx={{
          position: "absolute",
          opacity: 0,
          top: ["10%", "10%", "5%", "35%"],
          right: ["10%", "10%", "10%", "15%"],
          height: ["50%", "50%", "60%", "20%"],
          transform: "translate(0px, -100px)",
        }}
        ref={nextJsRef}
      />
    </Box>
  )
}

export default HomeAnimation
