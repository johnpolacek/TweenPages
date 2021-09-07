import { Text, Image } from "theme-ui"
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
        <Text as="span" sx={{ display: "inline-block" }}>
          <Image
            src="/img/double-right.svg"
            sx={{ height: "20px", position: "relative", top: "3px" }}
          />
        </Text>
      </Text>
      <Text as="span">TweenPages</Text>
    </Text>
  </NavLink>
)

export default NavHome
