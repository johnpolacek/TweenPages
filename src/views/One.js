import { Flex, Box, Text } from "theme-ui"

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
      justifyContent: "center"
    }}
  >
    <Text as="h3" sx={{fontSize:6, fontWeight: 200, py: 4, pr: 6, mr: 6}}>Server Rendered Web Pages</Text>
    <Text as="h3" sx={{fontSize:6, fontWeight: 200, py: 4, pl: 6, ml: 6}}>App Style Page Transitions</Text>
  </Flex>
)

export default One
