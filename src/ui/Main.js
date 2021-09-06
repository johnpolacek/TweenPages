import { Box } from "theme-ui"

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        display: "flex",
        flex: 1,
      }}
    >
      {children}
    </Box>
  )
}

export default Main
