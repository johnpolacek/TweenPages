import Wrapper from "../src/layout/Wrapper"
import Docs from "../src/views/Docs"

const DocsPage = () => (
  <Wrapper
    url="https://tweenpages.vercel.app/docs"
    title="TweenPages | Docs"
    description="TweenPages Docs for building Web Apps with Next.js, Theme UI, Cypress"
    twitter="johnpolacek"
    imageUrl="https://tweenpages.vercel.app/project-logo.png"
    imageAlt="TweenPages Logo"
    background="linear-gradient(90deg,#fff,#fff)"
  >
    <Docs />
  </Wrapper>
)

export default DocsPage
