import { gsap } from "gsap"
import { useRef } from "react"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"
import Link from "next/link"
import { Link as A } from "theme-ui"
import { useRouter } from "next/router"

const NavLink = ({ children, href, delay }) => {
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    gsap.set(el.current, { y: 20 })
    gsap.to(el.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "back.out",
    })
  }, [])

  const router = useRouter()
  return (
    <Link href={href}>
      <A
        ref={el}
        sx={{
          opacity: 0,
          p: 3,
          mt: 1,
          fontSize: 2,
          fontWeight: 600,
          display: "inline-block",
          textDecoration: "none",
          color: router.pathname === href ? "black" : "primary",
          cursor: "pointer",
        }}
      >
        {children}
      </A>
    </Link>
  )
}

export default NavLink
