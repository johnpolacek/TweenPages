import { Flex, Box, Text } from "theme-ui"

const Three = () => (
  <Flex
    id="three"
    sx={{
      p: [0, 4],
      flex: 1,
      color: "white",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Text>Created</Text>
    <Text>by</Text>
    <Text>John Polacek</Text>
    <Text>from Chicago</Text>
    <Text>Check me out</Text>
  </Flex>
)

export default Three
