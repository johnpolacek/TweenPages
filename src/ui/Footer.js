import { Box } from "theme-ui"

const Footer = (props) => (
  <Box
    as="footer"
    sx={{
      p: 4,
      color: "#AAA",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Box as="span" sx={{ mx: 3, display: "inline-block", pb: 3 }}>
      Created by <a href="https://johnpolacek">John Polacek</a>
    </Box>
    <Box as="span" sx={{ mx: 3, display: "inline-block", pb: 3 }}>
      Open sourced on{" "}
      <a href="https://github.com/johnpolacek/TweenPages">Github</a>
    </Box>
    <Box as="span" sx={{ mx: 3, display: "inline-block", pb: 3 }}>
      Follow <a href="https://twitter.com/johnpolacek">@johnpolacek</a>
    </Box>
  </Box>
)

export default Footer
