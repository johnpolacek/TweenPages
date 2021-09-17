import { TransitionProvider } from "../src/context/TransitionContext"
import TransitionLayout from "../src/animation/TransitionLayout"
import { Box } from "theme-ui"
import Header from "../src/ui/Header"
import Footer from "../src/ui/Footer"

export default function MyApp({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </TransitionLayout>
    </TransitionProvider>
  )
}
