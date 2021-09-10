import Link from "next/link"
import { Link as A } from "theme-ui"
import { Flex, Box, Text, Image, Button } from "theme-ui"
import ImplodeExplodeInOut from "../animation/ImplodeExplodeInOut"
import FadeInOutUp from "../animation/FadeInOutUp"
import ScaleInOut from "../animation/ScaleInOut"
import HomeAnimation from "../animation/HomeAnimation"

const Home = () => (
  <Flex
    id="home"
    sx={{
      p: [0, 4],
      flex: 1,
      color: "white",
      flexWrap: "wrap",
    }}
  >
    <Flex
      sx={{
        width: ["100%", "100%", "100%", "45%", "50%"],
        py: [0, 4],
        px: 4,
        alignItems: "center",
      }}
    >
      <Box>
        <FadeInOutUp>
          <Text as="h1" sx={{ fontSize: 9, fontWeight: 100, pb: 4 }}>
            TweenPages
          </Text>
        </FadeInOutUp>
        <Box aria-label="Build complex animated page transitions with GSAP and Next.js.">
          <ImplodeExplodeInOut target="#subhead">
            <Text
              aria-hidden="true"
              id="subhead"
              as="h2"
              sx={{ fontSize: 4, fontWeight: 500, pb: [0, 0, 0, 5] }}
            >
              Build complex animated page transitions with GSAP and Next.js.
            </Text>
          </ImplodeExplodeInOut>
        </Box>
        <Flex>
          <ScaleInOut as="div" delay={4}>
            <A sx={{textDecoration: "none"}} href="https://github.com/johnpolacek/TweenPages">
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: 4,
                  fontSize: 3,
                  fontWeight: 400,
                  px: 4,
                  py: 3,
                  bg: "royalblue",
                }}
              >
                <Image
                  width="40"
                  height="40"
                  sx={{ ml: -2, mr: 3, opacity: 0.8 }}
                  src="/img/github-icon.svg"
                />
                View on Github
              </Button>
            </A>
          </ScaleInOut>
          <ScaleInOut as="div" delay={4.1}>
            <Link href="/one" passHref={true}>
              <A>
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: 3,
                    fontSize: 3,
                    fontWeight: 400,
                    px: 4,
                    py: 3,
                  }}
                >
                  <Image
                    width="38"
                    height="38"
                    sx={{ ml: -2, mr: 2, opacity: 0.5 }}
                    src="/img/double-right-black.svg"
                  />
                  Bring the Action
                </Button>
              </A>
            </Link>
          </ScaleInOut>
        </Flex>
      </Box>
    </Flex>
    <Box sx={{ width: ["100%", "100%", "100%", "55%", "50%"] }}>
      <HomeAnimation />
    </Box>
  </Flex>
)

export default Home
