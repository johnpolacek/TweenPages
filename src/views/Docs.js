import { Flex, Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import TOC from "../mdx/TOC.md"
import MarkdownContent from "../../README.md"

const Docs = (props) => (
  <MDXProvider>
    <Flex
      id="docs"
      sx={{
        borderTop: "1px solid #eee",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "25%",
          borderRight: "1px solid #eee",
          py: [4, 5],
          px: [3],
        }}
      >
        <Box id="toc" sx={{ fontSize: 2 }}>
          <TOC />
        </Box>
      </Box>
      <Box sx={{ width: "75%", p: [4, 5] }}>
        <MarkdownContent />
      </Box>
    </Flex>
  </MDXProvider>
)

export default Docs
