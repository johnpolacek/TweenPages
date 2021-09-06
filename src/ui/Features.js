import { Box } from "theme-ui"
import Feature from "./Feature"

const Features = (props) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
    }}
  >
    <Feature
      title="Next.js"
      benefits={[
        "Server Rendering",
        "Parameterized Routing",
        "Static Export",
        "SEO Friendly",
      ]}
      href="https://nextjs.org/"
    />
    <Feature
      title="Theme UI"
      benefits={[
        "Robust Theming API",
        "CSS-in-JS with Emotion",
        "Easy responsive styles",
        "Design Token friendly",
      ]}
      href="https://theme-ui.com/"
    />
    <Feature
      title="MDX"
      benefits={[
        "Author content in Markdown",
        "Use Markdown and JSX together",
        "Import .md files as components",
        "Build-time compilation",
      ]}
      href="https://mdxjs.com/"
    />
    <Feature
      title="Cypress"
      benefits={[
        "Fast, easy browser testing",
        "Visual snapshot timeline",
        "Real time reloading",
        "Pre-deploy test script",
      ]}
      href="https://www.cypress.io/"
    />
    <Feature
      title="Prettier"
      benefits={["Automatic code formatting", "On Change watch script"]}
      href="https://prettier.io/"
    />
    <Feature
      title="Pre-Configured"
      benefits={[
        "Application Shell UI",
        "Configurable Theme",
        "Deploy to Vercel",
        "Organized component library",
        "AppContext Example",
      ]}
      href="/docs"
    />
  </Box>
)

export default Features
