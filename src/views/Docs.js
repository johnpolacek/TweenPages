import { Flex, Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import TOC from "../mdx/TOC.md"
import MarkdownContent from "../../README.md"

const Docs = (props) => (
  <MDXProvider>
    <Flex
      sx={{
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: ["100%", "100%", "33.33%", "25%"],
          borderRight: "1px solid #eee",
          py: [3, 4, 5],
          px: [3],
        }}
      >
        <Box id="toc" sx={{ fontSize: 2 }}>
          <TOC />
        </Box>
      </Box>
      <Box
        id="docs"
        sx={{
          width: ["100%", "100%", "66.66%", "75%"],
          px: 5,
          py: [3, 4, 5],
          maxHeight: "100vh",
          overflow: "scroll",
        }}
      >
        <MarkdownContent />
      </Box>
    </Flex>
  </MDXProvider>
)

export default Docs
