import { ThemeProvider } from "theme-ui"
import Layout from "./Layout"
import Theme from "./Theme"

const Wrapper = (props) => {
  // Want Google Analytics? --> https://github.com/react-ga/react-ga --> add your UI code below
  // ReactGA.initialize("UA-1234567-89")
  // ReactGA.set({ anonymizeIp: true })
  // if (typeof window !== "undefined") {
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }

  return (
    <ThemeProvider theme={Theme}>
      <Layout {...props} />
    </ThemeProvider>
  )
}

export default Wrapper
