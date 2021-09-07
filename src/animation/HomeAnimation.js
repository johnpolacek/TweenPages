import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box, Image, Text } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"
import AnimateInOut from "./AnimateInOut"

const HomeAnimation = ({ children }) => (
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
      }}
    />
    <Text
      sx={{
        fontSize: 8,
        fontWeight: 500,
        position: "absolute",
        top: ["10%", "10%", "10%", "36.5%"],
        left: "45%",
      }}
    >
      +
    </Text>
    <Image
      src="/img/nextjs.svg"
      sx={{
        position: "absolute",
        top: ["10%", "10%", "5%", "35%"],
        right: ["10%", "10%", "10%", "15%"],
        height: ["50%", "50%", "60%", "20%"],
      }}
    />
  </Box>
)

export default HomeAnimation
