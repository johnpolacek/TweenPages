import { Flex, Box } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import TOC from "../mdx/TOC.md"
import MarkdownContent from "../../README.md"
import CodeBlock from "../ui/CodeBlock"
import FlyInOut from "../animation/FlyInOut"
import FadeInOutUp from "../animation/FadeInOutUp"

function getAnchor(text) {
  console.log("getAnchor: " + text)
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
}

const Heading = (props) => <Box id={getAnchor(props.children)} {...props} />

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
}

const Docs = (props) => (
  <MDXProvider components={components}>
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
        }}
      >
        <FlyInOut x={-400} delay={0.5} durationIn={2}>
          <Box
            id="toc"
            sx={{
              fontSize: 2,
              borderRight: "1px solid #eee",
              py: [3, 4, 5],
              px: [3],
            }}
          >
            <TOC />
          </Box>
        </FlyInOut>
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
        <FadeInOutUp delay={1.5}>
          <MarkdownContent />
        </FadeInOutUp>
      </Box>
    </Flex>
  </MDXProvider>
)

export default Docs
