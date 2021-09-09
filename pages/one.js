import Wrapper from "../src/layout/Wrapper"
import One from "../src/views/One"

const Page1 = () => (
  <Wrapper
    url="https://next-project-starter.vercel.app/one"
    title="Next Project Starter Docs | Animated Page Transition 1"
    description="Next Project Starter Docs for building Web Apps with Next.js, Theme UI, Cypress"
    twitter="johnpolacek"
    imageUrl="https://next-project-starter.vercel.app/project-logo.png"
    imageAlt="Next Project Starter Logo"
    background="linear-gradient(90deg,purple,black)"
  >
    <One />
  </Wrapper>
)

export default Page1
