## Overview

TweenPages is on Github: [github.com/johnpolacek/TweenPages](https://github.com/johnpolacek/TweenPages)

### Why Next.js?

One of the things that makes Next.js so great is that you can create a modern, slick single page app experience while keeping the performance and other benefits of classic server-side rendering and routing.

There is an official [next-page-transitions example](https://github.com/vercel/next.js/tree/canary/examples/with-next-page-transitions) that demonstrates how to add a loading state when navigating to a page, wait for the page to load its content and animate in when it's ready.

What about something more ambitious and complex? We could offer something more ambitious:

- Intro and outro animations defined at the component level
- A higher order component that manages page transitions and the animations of nested child components
- Re-usable, declarative animation componenents
- No flash of unstyled content on initial page load

### Why GSAP?

Back in the early days of the web, if you wanted to craft complex, ambitious animations as part of a web experience, you would use Flash. Thanks to advancements in the web platform and open source project, we can build these today, but in an accessible, responsive, performant way.

The Greensock Animation Platform was the best animation library in Flash and is today the most robust animation library for the web, benefiting from many years of enhancements and platform stability.

A great place to get started with GSAP and React is to read [GSAP + React, First Steps & Handy Techniques](https://greensock.com/react) and [GSAP + React, Advanced Animation Techniques](https://greensock.com/react-advanced).

## Intros and Outros

### The Intro/Outro Pattern

A useful pattern in building animations into applications is the concept of component-level intro/outro animations, something that GSAP is very well suited for. 

Each component can have its own animation as it gets added to the view, an intro. Typically you would do this by defining styles for the starting values for an element, such as `opacity:0` for a fade in. Then setting another style for the ending value when you element comes to rest (e.g. `opacity:1`).

Your components may be composed of multiple elements, with different values that get transitioned, perhaps flying in, rotating, scaling, etc.

The outro is typically the intro animation in reverse, where you set a value that you want the element to transition to before it is removed from the view (e.g. `opacity:1`. 

It is of course possible you may wish to mix and match these intro/outro animations, for example a fly in from the bottom of the view, then a static fade out for the exit.

### Intro Animations in Next.JS

For an intro animations in React, you might typically reach for `useLayoutEffect`, but because Next.js does SSR, your console will fill up with warnings for every animated component you have on your page. To avoid this we can apply `useIsomorphicLayoutEffect` instead of `useEffect`. [Check it out on Github](https://github.com/streamich/react-use/blob/master/docs/useIsomorphicLayoutEffect.md).

Additionally with SSR, to prevent the flash of unstyled content (FOUC). This frequently happens when an element on a server-side rendered page displays for a brief moment while the JavaScript is loaded and executed.

For example, if you have a fade intro on your element, there will be a brief flash where it is displayed at full opacity, then it will disappear and fade in as intended.

To avoid this, we need to make sure the initial styling state of the component is correct. For example, if we are fading in, the initial style of that component should be an opacity of zero.

### Outro Animations in Next.JS

Outro animations are where it gets tricky. We need to intercept the page transition, and do whatever exit animations our child components need to do, then proceed to go to the next page, where our components will all animate in.

To pull this off, we will make use of the following:

- A `TransitionLayout` higher order component used as a wrapper in `MyApp` that will delay the routing change until after any animations have completed.
- A `TimelineProvider` component that will take advantage of React’s `useContext` hook to share an outro timeline across multiple components, wherever they are nested in our app

## Page Transitions

In Next.js, we can add a custom App component to initialize pages. It is typical to use this to persist layouts between page changes (e.g. a header navigation bar).

Additionally, we can use the Custom App component to manage our page transition animations. 

### Transition Provider

In order to make a page transition effect, we need to prevent rendering the new page before our outro animation is done. 

We may have many components with different animation effects nested in our pages. To keep track of all the different outro transitions, we will use a combination of React’s Context API and a top-level GSAP timeline.

In `TransitionContext` we will create our `TransitionProvider` which will make our GSAP timeline for outro animations available to any components who would like to transition out during a page change.

```
import React, { useState, createContext, useCallback } from "react"
import gsap from "gsap"

const TransitionContext = createContext({})

const TransitionProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  )

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider }
```

What if you have pages with different background colors and you would like to transition smoothly from one to another? We can can add `background` as another property in addition to `timeline` in `TransitionContext`.

### Transition Layout

Next, we have `TransitionLayout` which will be our controller that will initiate the outro animations and update the page when they are all complete. It also contains a wrapper component for the background color page transition animation.

```
import { gsap } from "gsap"
import { TransitionContext } from "../context/TransitionContext"
import { useState, useContext, useRef } from "react"
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect"

export default function TransitionLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, background } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children)
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear()
          setDisplayChildren(children)
        })
      }
    }
  }, [children])

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      background,
      duration: 1,
    })
  }, [background])

  return <div ref={el}>{displayChildren}</div>
}
```

### Custom App

Let’s take a look at our Custom App component.

```
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
```

Here we have `TransitionProvider` and `TransitionLayout` wrapping the other elements so that they can access our `TransitionContext` properties. We have a `Header` and `Footer` that exist outside of `Component` so that they will be static after the initial page load.

### Component-Level Animation

Here is an example of a basic animation we can do at the component level. We can add as many of these as we want to a page and they will all do the same thing, wrap all its children in a transparent div and fade it in on page load, then fade out when navigating to a different page.

```
import { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const FadeInOut = ({ children }) => (
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  // useIsomorphicLayoutEffect to avoid console warnings
  useIsomorphicLayoutEffect(() => {
    // intro animation will play immediately
    gsap.to(el.current, {
      opacity: 1,
      duration: 1,
    })

    // add outro animation to top-level outro animation timeline
    timeline.add(
      gsap.to(el.current, {
        opacity: 1,
        duration: .5,
      }),
      0
    )
  }, [])

  // set initial opacity to 0 to avoid FOUC for SSR
  <Box ref={el} sx={{opacity: 0}}>
    {children}
  </Box>
)

export default FadeInOut
```

We can take this pattern and extract it into an extendable `AnimateInOut` helper component for reusable intro/outro animation patterns in our app.

```
import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const AnimateInOut = ({
  children,
  as,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
  skipOutro,
}) => {
  const { timeline } = useContext(TransitionContext)
  const el = useRef()

  useIsomorphicLayoutEffect(() => {
    // intro animation
    if (set) {
      gsap.set(el.current, { ...set })
    }
    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
    })

    // outro animation
    if (!skipOutro) {
      timeline.add(
        gsap.to(el.current, {
          ...from,
          delay: delayOut || 0,
          duration: durationOut,
        }),
        0
      )
    }
  }, [])

  return (
    <Box as={as} sx={from} ref={el}>
      {children}
    </Box>
  )
}

export default React.memo(AnimateInOut)
```

The `AnimateInOut` component has built in flexibility for different scenarios:

- Setting different animations, durations and delays for intros and outros
- Skipping the outro
- Setting the element tag for the wrapper, e.g. use a `<span>` instead of a `<div>`
- Use GSAP’s `set` option to define initial values for the intro

Using this we can create all sorts of reusable intro/outro animations, such as `<FlyInOut>`, `<ScaleInOut>`, `<RotateInOut3D>` and so forth.

