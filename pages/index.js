import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"

// Note: It is recommended for SEO that you have a different title and description for each page

const IndexPage = () => (
  <Wrapper
    url="https://next-project-starter.vercel.app/"
    title="Next Project Starter"
    description="Get your next React project up and running quickly with Next.js, Theme UI, MDX and more."
    twitter="johnpolacek"
    imageUrl="https://next-project-starter.vercel.app/project-logo.png"
    imageAlt="Next Project Starter Logo"
    background="linear-gradient(90deg,#110066,black)"
  >
    <Home />
  </Wrapper>
)

export default IndexPage
