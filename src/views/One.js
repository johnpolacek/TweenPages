import { Flex, Box, Text } from "theme-ui"
import AnimateAroundCircularPath from "../animation/AnimateAroundCircularPath"
import ScaleInOut from "../animation/ScaleInOut"

const One = () => (
  <Flex
    id="one"
    sx={{
      p: [0, 4],
      flex: 1,
      color: "white",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <AnimateAroundCircularPath>
      <ScaleInOut duration={3} ease="power4.out" scale={1.2} x={-180}>
        <Text
          as="h3"
          sx={{
            fontSize: 6,
            fontWeight: 200,
            width: "300px",
            textAlign: "center",
          }}
        >
          Server Rendered Web Pages
        </Text>
      </ScaleInOut>
      <ScaleInOut duration={3} ease="power4.out" scale={1.2} x={180}>
        <Text
          as="h3"
          sx={{
            fontSize: 6,
            fontWeight: 200,
            width: "300px",
            textAlign: "center",
          }}
        >
          App Style Page Transitions
        </Text>
      </ScaleInOut>
    </AnimateAroundCircularPath>
  </Flex>
)

export default One
