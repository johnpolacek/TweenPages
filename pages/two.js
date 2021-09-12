import Wrapper from "../src/layout/Wrapper"
import Two from "../src/views/Two"

const Page2 = () => (
  <Wrapper
    url="https://tweenpages.vercel.app/two"
    title="TweenPages | Transition 2"
    description="Demo of TweenPages with a complex transition to page number two"
    twitter="johnpolacek"
    imageUrl="https://tweenpages.vercel.app/project-logo.png"
    imageAlt="TweenPages Logo"
    background="linear-gradient(90deg,purple,black)"
  >
    <Two />
  </Wrapper>
)

export default Page2
