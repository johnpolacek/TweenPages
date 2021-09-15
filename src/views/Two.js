import Link from "next/link"
import { Flex, Box, Text, Button, Image, Link as A } from "theme-ui"
import FadeIn from "../animation/FadeIn"
import FadeInOut from "../animation/FadeInOut"
import FlyInOut from "../animation/FlyInOut"
import ScaleInOut from "../animation/ScaleInOut"

const Two = () => (
  <Flex
    id="two"
    sx={{
      pt: 4,
      mt: 3,
      px: [4, 5],
      pb: 5,
      flex: 1,
      color: "white",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box sx={{ width: ["100%", "100%", "50%"], pb: [4, 5, 0] }}>
      <FadeIn duration={0.5} y={1200} delay={0.5}>
        <Box
          as="h2"
          sx={{
            borderLeft: "1px solid rgba(255,255,255,.25)",
            pl: 4,
            py: 4,
            overflow: "hidden",
          }}
        >
          <FlyInOut x={-500} delay={0.6}>
            <Text
              as="span"
              sx={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 900,
                display: "block",
              }}
            >
              Build
            </Text>
          </FlyInOut>
          <FlyInOut x={-500} delay={0.7}>
            <Text
              as="span"
              sx={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 900,
                display: "block",
              }}
            >
              Supa
            </Text>
          </FlyInOut>
          <FlyInOut x={-500} delay={0.8}>
            <Text
              as="span"
              sx={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 900,
                display: "block",
              }}
            >
              Cool
            </Text>
          </FlyInOut>
          <FlyInOut x={-500} delay={0.9}>
            <Text
              as="span"
              sx={{
                fontSize: 10,
                lineHeight: 1,
                fontWeight: 900,
                display: "block",
              }}
            >
              Stuff
            </Text>
          </FlyInOut>
        </Box>
      </FadeIn>
    </Box>
    <Box sx={{ width: ["100%", "100%", "50%"], pr: 5 }}>
      <FadeInOut x={-20} delay={2}>
        <Text
          as="h2"
          sx={{ fontWeight: 900, fontSize: 6, pb: 2, overflow: "hidden" }}
        >
          Next.js
        </Text>
      </FadeInOut>
      <Box>
        <FadeInOut y={5} delay={2.25}>
          <Text as="p" sx={{ fontWeight: 200, pb: 3 }}>
            <A
              sx={{ color: "cyan", fontWeight: 500 }}
              href="https://nextjs.org/"
            >
              Next.js
            </A>{" "}
            is the React Framework for Production. With build-time static
            generation and request-time server-side rendering, your pages will
            be served without needing to wait for heavy JavaScript loading and
            rendering.
          </Text>
          <Text as="p" sx={{ fontWeight: 200 }}>
            Once users have entered your site and loaded a page, React takes
            over and you get all the benefits of being in a single page
            application. This includes the ability to add robust animations as
            your users navigate the site.
          </Text>
        </FadeInOut>
      </Box>
      <FadeInOut x={-20} delay={2.5}>
        <Text as="h2" sx={{ fontWeight: 900, fontSize: 6, pt: 4, pb: 2 }}>
          GSAP
        </Text>
      </FadeInOut>
      <FadeInOut y={5} delay={2.75}>
        <Box sx={{ pb: 4 }}>
          <Text as="p" sx={{ fontWeight: 200, pb: 3 }}>
            The{" "}
            <A
              sx={{ color: "cyan", fontWeight: 500 }}
              href="https://greensock.com/"
            >
              Greensock Animation Platform (GSAP)
            </A>{" "}
            is the standard for modern web animation. With over 20 years of
            active development under its belt, its API has grown to allow
            animators to do just about anything they can imagine.
          </Text>
          <Text as="p" sx={{ fontWeight: 200 }}>
            Read{" "}
            <Link passHref href="/docs">
              <A sx={{ color: "cyan", fontWeight: 500 }}>the docs</A>
            </Link>{" "}
            to find out how you can use GSAP with Next.js to deliver complex
            page transitions to your project.
          </Text>
        </Box>
      </FadeInOut>
      <ScaleInOut as="div" delay={4.1} x={-320}>
        <Link href="/three" passHref={true}>
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
                fontSize: [1, 2],
                fontWeight: 400,
                px: [2, 3],
                py: [1, 2],
                width: "100%",
                maxWidth: "240px",
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
              More Action
            </Button>
          </A>
        </Link>
      </ScaleInOut>
    </Box>
  </Flex>
)

export default Two
