import { gsap } from "gsap"
import { useRef } from "react"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import Link from "next/link"
import { Box, Text, Image } from "theme-ui"
import { Link as A } from "theme-ui"

const NavHome = () => {
  const icon = useRef()
  const text = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.set(icon.current, { x: -10 })
    gsap.to(icon.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    })
    gsap.set(text.current, { x: -10 })
    gsap.to(text.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.75,
      ease: "power4.out",
    })
  }, [])

  return (
    <Link href="/">
      <A sx={{ cursor: "pointer" }}>
        <Text
          as="h1"
          sx={{
            py: [2, 3],
            px: 3,
            fontSize: 3,
            fontWeight: 200,
            display: "inline-block",
            color: "black",
            m: 0,
          }}
        >
          <Text
            as="span"
            sx={{
              pr: 2,
              position: "relative",
              top: "-2px",
              color: "primary",
            }}
          >
            <Box
              ref={icon}
              as="span"
              sx={{ display: "inline-block", opacity: 0 }}
            >
              <Image
                src="/img/double-right.svg"
                alt=""
                sx={{
                  height: "20px",
                  position: "relative",
                  top: "5px",
                  left: "4px",
                }}
              />
            </Box>
          </Text>
          <Text
            ref={text}
            sx={{ display: "inline-block", opacity: 0 }}
            as="span"
          >
            TweenPages
          </Text>
        </Text>
      </A>
    </Link>
  )
}

export default NavHome
