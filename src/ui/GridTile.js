import { Box } from "theme-ui"

const GridTile = ({ children, display }) => (
  <Box
    sx={{
      display: display || "flex",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      py: [3, 4],
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      background:
        "linear-gradient(45deg, rgba(255,255,255,.1) 0%, rgba(0,0,0,.2) 100%)",
    }}
  >
    {children}
  </Box>
)

export default GridTile
