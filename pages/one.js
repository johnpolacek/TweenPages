import Wrapper from "../src/layout/Wrapper"
import One from "../src/views/One"

const Page1 = () => (
  <Wrapper
    url="https://tweenpages.vercel.app/one"
    title="TweenPages | Transition 1"
    description="Demo of TweenPages with a complex transition to page number one"
    twitter="johnpolacek"
    imageUrl="https://tweenpages.vercel.app/project-logo.png"
    imageAlt="TweenPages Logo"
    background="linear-gradient(90deg,green,black)"
  >
    <One />
  </Wrapper>
)

export default Page1
