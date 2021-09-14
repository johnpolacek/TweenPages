import { Box } from "theme-ui"
import NavHome from "./NavHome"
import NavLink from "./NavLink"
import GithubLink from "./GithubLink"

const Nav = () => (
  <Box
    as="nav"
    sx={{
      display: "flex",
      flexWrap: "wrap",
      py: [2, 0],
      bg: "white",
      position: "relative",
      zIndex: 999999,
    }}
  >
    <Box
      sx={{ width: ["100%", "50%"], pl: [0, 3], textAlign: ["center", "left"] }}
    >
      <NavHome />
    </Box>
    <Box
      sx={{
        width: ["100%", "50%"],
        textAlign: ["center", "right"],
        pr: [0, 3],
        overflow: "hidden",
      }}
    >
      <NavLink href="/" delay={3}>
        one
      </NavLink>
      <NavLink href="/two" delay={3.1}>
        two
      </NavLink>
      <NavLink href="/three" delay={3.2}>
        three
      </NavLink>
      <NavLink href="/docs" delay={3.3}>
        docs
      </NavLink>
    </Box>
  </Box>
)

export default Nav
