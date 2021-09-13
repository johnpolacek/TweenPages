import Link from "next/link"
import Image from "next/image"
import { Link as A } from "theme-ui"
import { Flex, Box, Text, Button, Image as Img } from "theme-ui"
import AnimateAroundCircularPath from "../animation/AnimateAroundCircularPath"
import AnimatedImagesAroundCircularPath from "../animation/AnimatedImagesAroundCircularPath"
import ScaleInOut from "../animation/ScaleInOut"
import { useWindowSize } from "../animation/util"

const AnimateInImage = ({ src, width, height }) => (
  <ScaleInOut
    delay={1.5 + Math.random()}
    skipOutro={true}
    ease="back.out"
    scaleTo={0.75 + Math.random() / 1.5}
    x={Math.random() * 800 - 400}
    y={Math.random() * 400 - 200}
    xTo={Math.random() * 100 - 50}
    yTo={Math.random() * 100 - 50}
  >
    <Image width={width / 3} height={height / 3} src={src} />
  </ScaleInOut>
)

const One = () => {
  const [windowWidth, windowHeight] = useWindowSize()
  const pathWidth = windowWidth * 0.66
  const pathHeight = windowHeight * 0.6

  return (
    <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: "5vh",
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <AnimatedImagesAroundCircularPath />
      </Box>
      <Box
        sx={{
          color: "white",
          position: "absolute",
          top: "5vh",
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <AnimateAroundCircularPath
          width={pathWidth}
          height={pathHeight}
          duration={60}
        >
          <ScaleInOut
            duration={3}
            ease="power4.out"
            scale={1.2}
            x={-180}
            delay={1}
            skipOutro={true}
          >
            <Text
              as="h3"
              sx={{
                fontSize: [4, 5],
                maxWidth: ["180px", "180px", "320px"],
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Server Rendered Web Pages
            </Text>
          </ScaleInOut>
          <ScaleInOut
            duration={3}
            ease="power4.out"
            scale={1.2}
            x={180}
            delay={1}
            skipOutro={true}
          >
            <Text
              as="h3"
              sx={{
                fontSize: [4, 5],
                maxWidth: ["180px", "180px", "320px"],
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              App Style Page Transitions
            </Text>
          </ScaleInOut>
        </AnimateAroundCircularPath>
      </Box>
      <Flex
        sx={{
          p: [0, 4],
          flex: 1,
          color: "white",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          zIndex: 999999,
          position: "relative",
        }}
      >
        <ScaleInOut ease="back.out" duration={0.5} delay={4.5}>
          <Link href="/two" passHref={true}>
            <A>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 3,
                  fontSize: 2,
                  fontWeight: 400,
                  px: 4,
                  py: 3,
                  mt: -3,
                }}
              >
                <Img
                  width="24"
                  height="24"
                  sx={{ ml: -2, mr: 2, opacity: 0.5 }}
                  src="/img/double-right-black.svg"
                />
                Onward!
              </Button>
            </A>
          </Link>
        </ScaleInOut>
      </Flex>
    </Box>
  )
}

export default One
