import Link from "next/link"
import { Link as A } from "theme-ui"
import { Flex, Box, Text, Image, Button } from "theme-ui"
import ImplodeExplodeInOut from "../animation/ImplodeExplodeInOut"
import FadeInOutUp from "../animation/FadeInOutUp"
import ScaleInOut from "../animation/ScaleInOut"
import HomeAnimation from "../animation/HomeAnimation"

const Home = () => (
  <Flex
    sx={{
      p: [0, 4],
      flex: 1,
      color: "white",
      flexWrap: "wrap",
    }}
  >
    <Flex
      sx={{
        width: ["100%", "100%", "50%"],
        py: [0, 4],
        px: 4,
        alignItems: "center",
        flexDirection: ["column", "row"],
      }}
    >
      <Box>
        <FadeInOutUp>
          <Text as="h1" sx={{ fontSize: [7, 8, 9], fontWeight: 100, py: 4 }}>
            TweenPages
          </Text>
        </FadeInOutUp>
        <Box aria-label="Build complex animated page transitions with GSAP and Next.js.">
          <ImplodeExplodeInOut target="#subhead">
            <Text
              aria-hidden="true"
              id="subhead"
              as="h2"
              sx={{ fontSize: [2, 3, 4], fontWeight: 500, pb: [4, 5] }}
            >
              Build complex animated page transitions with GSAP and Next.js.
            </Text>
          </ImplodeExplodeInOut>
        </Box>
        <Flex
          sx={{
            flexDirection: ["column", "column", "column", "row"],
            width: "100%",
            mb: 3,
            maxWidth: ["300px", "300px", "none"],
            mx: "auto",
          }}
        >
          <Box sx={{ mr: [0, 0, 0, 3] }}>
            <ScaleInOut as="div" delay={4}>
              <A
                sx={{
                  textDecoration: "none",
                  width: "100%",
                  mr: 4,
                }}
                href="https://github.com/johnpolacek/TweenPages"
              >
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: ["auto", "auto", "auto", 0],
                    ml: ["auto", "auto", "auto", 0],
                    fontSize: [1, 2, 3],
                    fontWeight: 400,
                    px: 4,
                    py: 3,
                    bg: "royalblue",
                    width: "100%",
                    maxWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width="40"
                    height="40"
                    sx={{ ml: [-2, -3, -2], mr: [2, 3, 2], opacity: 0.75 }}
                    src="/img/github-icon.svg"
                  />
                  View on Github
                </Button>
              </A>
            </ScaleInOut>
          </Box>
          <ScaleInOut as="div" delay={4.1}>
            <Link href="/two" passHref={true}>
              <A
                sx={{
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: ["auto", "auto", "auto", 0],
                    mr: ["auto", "auto", "auto", 0],
                    mb: 3,
                    fontSize: [1, 2, 3],
                    fontWeight: 400,
                    px: [3, 4],
                    py: [2, 3],
                    width: "100%",
                    maxWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width="38"
                    height="38"
                    sx={{ ml: [-2, -3, -2], mr: [2, 3, 2], opacity: 0.5 }}
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
    <Box sx={{ width: ["100%", "100%", "50%"] }}>
      <HomeAnimation />
    </Box>
  </Flex>
)

export default Home
