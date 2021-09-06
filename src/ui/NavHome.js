import { Text } from "theme-ui"
import NavLink from "./NavLink"

const NavHome = (props) => (
  <NavLink href="/">
    <Text
      as="h1"
      sx={{
        color: "black",
        fontWeight: "inherit",
        m: 0,
        fontSize: "inherit",
      }}
    >
      <Text
        as="span"
        sx={{
          pr: 2,
          position: "relative",
          top: "-2px",
          color: "primary",
        }}
      >
        <Text as="span" sx={{ letterSpacing: "2px", display: "inline-block" }}>
          &lt;/&gt;
        </Text>
      </Text>
      <Text as="span">TweenPages</Text>
    </Text>
  </NavLink>
)

export default NavHome
