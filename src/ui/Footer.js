import { useContext } from "react"
import { Box, Link } from "theme-ui"
import { TransitionContext } from "../context/TransitionContext"

const Footer = () => {
  const { background } = useContext(TransitionContext)
  const linkColor = background === "white" ? "green" : "greenyellow"

  return (
    <Box
      as="footer"
      sx={{
        p: 4,
        color: background === "white" ? "#888" : "#AAA",
        textAlign: "center",
        fontSize: 1,
      }}
    >
      <Box as="span" sx={{ mx: 3, display: "inline-block", py: 3 }}>
        Created by{" "}
        <Link
          sx={{ color: linkColor, fontWeight: 500 }}
          href="https://johnpolacek"
        >
          John Polacek
        </Link>
      </Box>
      <Box as="span" sx={{ mx: 3, display: "inline-block", py: 3 }}>
        Open sourced on{" "}
        <Link
          sx={{ color: linkColor, fontWeight: 500 }}
          href="https://github.com/johnpolacek/TweenPages"
        >
          Github
        </Link>
      </Box>
      <Box as="span" sx={{ mx: 3, display: "inline-block", py: 3 }}>
        Follow{" "}
        <Link
          sx={{ color: linkColor, fontWeight: 500 }}
          href="https://twitter.com/johnpolacek"
        >
          @johnpolacek
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
