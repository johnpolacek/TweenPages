import { Link, Image } from "theme-ui"
import PropTypes from "prop-types"

const DownloadLink = (props) => (
  <Link
    sx={{
      textDecoration: "none",
      fontSize: 3,
      mt: 3,
      mb: [5, 6],
      px: 4,
      py: 3,
      bg: "primary",
      color: "#fff",
      boxShadow: "none",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      display: "inline-block",
    }}
    href="https://github.com/johnpolacek/next-project-starter"
  >
    <Image
      sx={{ position: "relative", top: "2px", left: "-8px" }}
      src="/download.svg"
      alt=""
    />
    Download
  </Link>
)

export default DownloadLink
