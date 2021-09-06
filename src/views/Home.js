import { Flex, Box, Text } from "theme-ui"
import FlyInOutRight from "../animation/FlyInOutRight"

const Home = (props) => (
  <Flex
    id="home"
    sx={{
      p: [3, 4],
      flex: 1,
      color: "white",
    }}
  >
    <Flex sx={{ width: "50%", p: [0, 4] }}>
      <FlyInOutRight>
        <Text as="h2" sx={{ fontSize: 5, fontWeight: 500, pt: 5 }}>
          Build complex animated page transitions with GSAP and Next.js.
        </Text>
      </FlyInOutRight>
    </Flex>
    <Box sx={{ width: "50%" }}>Image will go here...</Box>
  </Flex>
)

export default Home
