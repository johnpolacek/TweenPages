# TweenPages

### Animating Complex Next.js Page Transitions with GSAP

One of the great promises of Next.js is that you get that awesome single page app experience while also keeping the performance and architectural benefits of serverside rendering and routing.

There are some nice examples out there of rendering page layouts with a static header/nav/footer and a main content area that rehydrates with new content as the user navigates around the site. There are also some examples of a simple fade in and out transition of those page updates.

But what about something more complex? We could offer something more ambitious:

- Intro and outro animations defined at the component level
- A higher order `TimelineProvider` component that manages the page transition and all the animations of its children
- Re-usable, declarative animation componenents
- No flash of unstyled content on initial page load

Back in the old days, if you wanted to have complex, ambitious animations as part of a web experience, you would use Flash.

We were building component-based single page applications (aka rich internet appliciations RIAs). Thanks to advancements in the web platform and open source projects like Next.js, we can build these today, but in an accessible, responsive, performant way.

Something that hasn’t changed over this time has been the Greensock Animation Platform, which was the best animation library in Flash and is today the most robust animation library for the web. Amazingly, the syntax has not changed much over time, despite so many enhancements getting added over the years.

One useful pattern from those times is component-level intro/outro animations, a concept that GSAP is very well suited for. Each component can have its own animation as it gets added to the view, then another animation when it leaves.

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

--



--

GSAP is the most stable, performant and flexible animation library around, so we’ll be using that. The best place to get started is to read [GSAP + React, First Steps & Handy Techniques](https://greensock.com/react) and [GSAP + React, Advanced Animation Techniques](https://greensock.com/react-advanced).


----

Free Isometric illustrations by Majo Puterka

https://ui8.net/majo-puterka/products/free-isometric-illustrations-by-majo-puterka

----

https://dev.to/anxinyang/page-transition-effect-in-nextjs-9ch

https://stackoverflow.com/questions/29977799/how-should-i-handle-a-leave-animation-in-componentwillunmount-in-react

Add global delay at page level, then each of the individual components animate? Seems wrong

A top-level timeline seems like the right thing. Create a ref in the parent component and push each timeline into it for use in a master timeline. 

Create a `TimelineProvider`

```
const addAnimation = useCallback((animation, index) => {    
  tl.add(animation, index * 0.1);
}, [tl]);
```