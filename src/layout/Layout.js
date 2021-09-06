import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import { useEffect, useContext } from "react"
import { TransitionContext } from "../context/TransitionContext"
import { Box } from "theme-ui"
import Head from "./Head"
import Style from "./Style"
import Header from "../ui/Header"
import Main from "../ui/Main"
import Footer from "../ui/Footer"

const Layout = (props) => {
  const { setBackground } = useContext(TransitionContext)

  useEffect(() => {
    setBackground(props.background || "white")
  }, [props.background])

  return (
    <>
      <Head {...props} />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Header />
        <Main>{props.children}</Main>
        <Footer />
      </Box>

      <Style />
    </>
  )
}

export default Layout
