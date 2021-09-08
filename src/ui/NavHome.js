import Link from "next/link"
import { Text, Image } from "theme-ui"
import { Link as A } from "theme-ui"

const NavHome = (props) => (
  <Link href="/">
    <A sx={{ cursor: "pointer" }}>
      <Text
        as="h1"
        sx={{
          py: [2, 3],
          px: 3,
          fontSize: 3,
          fontWeight: 200,
          display: "inline-block",
          color: "black",
          m: 0,
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
    </A>
  </Link>
)

export default NavHome
