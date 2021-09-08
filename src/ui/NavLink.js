import PropTypes from "prop-types"
import Link from "next/link"
import { Link as A } from "theme-ui"
import { useRouter } from "next/router"

const NavLink = (props) => {
  const router = useRouter()
  return (
    <Link href={props.href}>
      <A
        sx={{
          py: [2, 3],
          px: 3,
          fontSize: 3,
          fontWeight: 200,
          display: "inline-block",
          textDecoration: "none",
          borderBottom: "1px solid",
          borderColor:
            router.pathname === props.href && props.href !== "/"
              ? "primary"
              : "white",
        }}
        {...props}
      />
    </Link>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default NavLink
