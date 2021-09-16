## Overview

### Why Next.js?

One of the things that makes Next.js so great is that you get that awesome single page app experience while also keeping the performance and architectural benefits of serverside rendering and routing.

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

### The Flash of Unstyled Content

You may have run across the term FOUC, which stands for Flash of Unstyled Content.

This frequently happens when an element on a server-side rendered page displays for a brief moment while the JavaScript is loaded and then applies styling.

For example, if you have a fade intro on your element, 








Intro animations are pretty straightforward at the component level because we have `useEffect`. With SSR, to prevent the flash of unstyled content (FOUC) we need to make sure the initial styling state of the component is correct. For example, if we are fading in, the initial style of that component should be an opacity of zero.

Exit animations is where it gets tricky. We need to intercept the page transition, and do whatever exit animations our child components need to do, then proceed to go to the next page, where our components will all animate in.

From https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

In Next.js `_app.js` is the entry point to start rendering page. When you navigation to a different page, the page component is passed to `MyApp`. In order to make a page transition effect, we need to prevent rendering the new page before our outro animation is done.

To pull this off, we will make use of the following:

- A `TransitionLayout` higher order component used as a wrapper in `MyApp`
- A `TimelineProvider` component that will take advantage of React’s `useContext` hook to share an outro  timeline across multiple components, wherever they are nested in our app
- An `AnimateInOut` helper component that will allow us to quickly build reusable intro/outro animation patterns in our app

What about page background colors? To transition from one background color to another, you would need to pass the previous page’s background to the new page so it can do the color transition. Also, transitioning between gradient backgrounds isn’t even supported in CSS Animations at this time, so we’ll rely on GSAP once again to pull this off.

Here we can use add a background prop to our `Main` component and `useEffect` to animate the background color