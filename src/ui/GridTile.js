import { Box } from "theme-ui"
import RotateInOut3D from "../animation/RotateInOut3D"

const GridTile = ({ children, display, bg }) => (
  <RotateInOut3D
    duration={1 + Math.random()}
    delay={0.5 + Math.random()}
    offsetY={120}
  >
    <Box sx={{ bg, width: "100%", height: "100%" }}>
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
            "linear-gradient(135deg, rgba(255,255,255,.1) 0%, rgba(0,0,0,.25) 100%)",
        }}
      >
        {children}
      </Box>
    </Box>
  </RotateInOut3D>
)

export default GridTile
