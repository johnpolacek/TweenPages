import Link from "next/link"
import { Flex, Box, Text, Link as A } from "theme-ui"

const Two = () => (
  <Flex
    id="two"
    sx={{
      p: [0, 4],
      flex: 1,
      color: "white",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box as="h2" sx={{ width: "50%", pl: 5 }}>
      <Text
        as="span"
        sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900, display: "block" }}
      >
        Build
      </Text>
      <Text
        as="span"
        sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900, display: "block" }}
      >
        Supa
      </Text>
      <Text
        as="span"
        sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900, display: "block" }}
      >
        Cool
      </Text>
      <Text
        as="span"
        sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900, display: "block" }}
      >
        Things
      </Text>
    </Box>
    <Box sx={{ width: "50%", pr: 5 }}>
      <Text as="h2" sx={{ fontWeight: 900, fontSize: 6, pb: 2 }}>
        Next.js
      </Text>
      <Text as="p" sx={{ fontWeight: 200, pb: 3 }}>
        <A sx={{ color: "cyan", fontWeight: 500 }} href="https://nextjs.org/">
          Next.js
        </A>{" "}
        is the React Framework for Production. With build-time static generation
        and request-time server-side rendering, your pages will be served
        without needing to wait for heavy JavaScript loading and rendering.
      </Text>
      <Text as="p" sx={{ fontWeight: 200 }}>
        Once users have entered your site and loaded a page, React takes over
        and you get all the benefits of being in a single page application,
        including the ability to add robust animations as your users navigate
        the site.
      </Text>
      <Text as="h2" sx={{ fontWeight: 900, fontSize: 6, pt: 4, pb: 2 }}>
        GSAP
      </Text>
      <Text as="p" sx={{ fontWeight: 200, pb: 3 }}>
        The{" "}
        <A
          sx={{ color: "cyan", fontWeight: 500 }}
          href="https://greensock.com/"
        >
          Greensock Animation Platform (GSAP)
        </A>{" "}
        is the standard for modern web animation. With over 20 years of active
        development under its belt, its API has grown to allow animators to do
        just about anything they can imagine.
      </Text>
      <Text as="p" sx={{ fontWeight: 200 }}>
        Read{" "}
        <Link passHref href="/docs">
          <A sx={{ color: "cyan", fontWeight: 500 }}>the docs</A>
        </Link>{" "}
        to find out how you can use GSAP with Next.js to deliver complex page
        transitions to your project.
      </Text>
    </Box>
  </Flex>
)

export default Two
