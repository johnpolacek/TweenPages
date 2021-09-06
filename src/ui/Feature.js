import { Box, Text, Link } from "theme-ui"
import PropTypes from "prop-types"

const Feature = (props) => (
  <Box
    sx={{
      width: ["100%", "50%", "33.33%"],
      pb: 5,
    }}
  >
    <Text as="h3" sx={{ fontSize: 4, color: "primary", pb: 3 }}>
      {props.title}
    </Text>
    <Box as="ul" sx={{ p: 0, m: 0 }}>
      {props.benefits.map((b) => (
        <Box
          as="li"
          key={b.toLowerCase().split(" ").join("-")}
          sx={{ listStyle: "none", mb: 1 }}
        >
          {b}
        </Box>
      ))}
    </Box>
    {props.href && (
      <Link
        href={props.href}
        sx={{ display: "block", fontStyle: "italic", mt: 3, fontSize: 0 }}
      >
        Find out more
      </Link>
    )}
  </Box>
)

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  href: PropTypes.string,
}

export default Feature
