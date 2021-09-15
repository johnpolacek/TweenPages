import { Box, Link } from "theme-ui"

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
    <Box as="span" sx={{ mx: 3, display: "inline-block", py: 3 }}>
      Created by{" "}
      <Link sx={{ color: "greenyellow" }} href="https://johnpolacek">
        John Polacek
      </Link>
    </Box>
    <Box as="span" sx={{ mx: 3, display: "inline-block", py: 3 }}>
      Open sourced on{" "}
      <Link
        sx={{ color: "greenyellow" }}
        href="https://github.com/johnpolacek/TweenPages"
      >
        Github
      </Link>
    </Box>
    <Box as="span" sx={{ mx: 3, display: "inline-block", py: 3 }}>
      Follow{" "}
      <Link
        sx={{ color: "greenyellow" }}
        href="https://twitter.com/johnpolacek"
      >
        @johnpolacek
      </Link>
    </Box>
  </Box>
)

export default Footer
