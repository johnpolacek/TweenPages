import { TransitionProvider } from "../src/context/TransitionContext"
import TransitionLayout from "../src/animation/TransitionLayout"

export default function MyApp({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Component {...pageProps} />
      </TransitionLayout>
    </TransitionProvider>
  )
}
