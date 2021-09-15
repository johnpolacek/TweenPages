import Wrapper from "../src/layout/Wrapper"
import Three from "../src/views/Three"

const Page3 = () => (
  <Wrapper
    url="https://tweenpages.vercel.app/three"
    title="TweenPages | Transition 3"
    description="Demo of TweenPages with a complex transition to page number three"
    twitter="johnpolacek"
    imageUrl="https://tweenpages.vercel.app/project-logo.png"
    imageAlt="TweenPages Logo"
    background="linear-gradient(90deg,green,black)"
  >
    <Three />
  </Wrapper>
)

export default Page3
