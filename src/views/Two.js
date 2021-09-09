import { Flex, Box, Text } from "theme-ui"

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
    <Box sx={{ width: "50%", pl: 5 }}>
      <Text as="h3" sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900 }}>
        Build
      </Text>
      <Text as="h3" sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900 }}>
        Supa
      </Text>
      <Text as="h3" sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900 }}>
        Cool
      </Text>
      <Text as="h3" sx={{ fontSize: 10, lineHeight: 1, fontWeight: 900 }}>
        Things
      </Text>
    </Box>
    <Box sx={{ width: "50%" }}>
      <Text>About building cool things...</Text>
    </Box>
  </Flex>
)

export default Two
