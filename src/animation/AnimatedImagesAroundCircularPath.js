import Image from "next/image"
import AnimateAroundCircularPath from "./AnimateAroundCircularPath"
import ScaleInOut from "./ScaleInOut"
import { useWindowSize } from "../animation/util"

const AnimateInImage = ({ src, width, height }) => (
  <ScaleInOut
    delay={1.5 + Math.random()}
    skipOutro={true}
    ease="back.out"
    scaleTo={0.75 + Math.random() / 1.5}
    x={Math.random() * 800 - 400}
    y={Math.random() * 400 - 200}
    xTo={Math.random() * 100 - 50}
    yTo={Math.random() * 100 - 50}
  >
    <Image width={width / 3} height={height / 3} src={src} />
  </ScaleInOut>
)

const AnimatedImagesAroundCircularPath = () => {
  const [windowWidth, windowHeight] = useWindowSize()
  const pathWidth = windowWidth * 0.8
  const pathHeight = windowHeight * 0.66

  return (
    <AnimateAroundCircularPath
      width={pathWidth}
      height={pathHeight}
      duration={120}
    >
      <AnimateInImage
        width={360}
        height={238}
        src="/pics/daniil-silantev-F6Da4r2x5to-unsplash_360-238.jpg"
      />
      <AnimateInImage
        width={360}
        height={202}
        src="/pics/joey-kyber-sFLVTqNzG2I-unsplash_360-202.jpg"
      />
      <AnimateInImage
        width={360}
        height={240}
        src="/pics/jason-ortego-buF62ewDLcQ-unsplash_360-240.jpg"
      />
      <AnimateInImage
        width={360}
        height={238}
        src="/pics/kunal-shinde--f0YLss50Bs-unsplash_360-238.jpg"
      />
      <AnimateInImage
        width={360}
        height={239}
        src="/pics/lukasz-szmigiel-jFCViYFYcus-unsplash_360-239.jpg"
      />
      <AnimateInImage
        width={360}
        height={232}
        src="/pics/mandy-choi-_qZ0us4az20-unsplash_360-232.jpg"
      />
      <AnimateInImage
        width={360}
        height={240}
        src="/pics/nikola-majksner-hXNGeAFOgT4-unsplash_360-240.jpg"
      />
      <AnimateInImage
        width={360}
        height={214}
        src="/pics/qingbao-meng-01_igFr7hd4-unsplash_360-214.jpg"
      />
      <AnimateInImage
        width={360}
        height={240}
        src="/pics/quick-ps-HWdvT20lGFk-unsplash_360-240.jpg"
      />
      <AnimateInImage
        width={360}
        height={202}
        src="/pics/ren-ran-Jy6luiLBsrk-unsplash_360-202.jpg"
      />
      <AnimateInImage
        width={360}
        height={217}
        src="/pics/robert-lukeman-zNN6ubHmruI-unsplash_360-217.jpg"
      />
      <AnimateInImage
        width={360}
        height={240}
        src="/pics/rodion-kutsaev-Qdi8UvGd1Ww-unsplash_360-240.jpg"
      />
      <AnimateInImage
        width={360}
        height={240}
        src="/pics/su-san-lee-g3PyXO4A0yc-unsplash_360-240.jpg"
      />
      <AnimateInImage
        width={360}
        height={270}
        src="/pics/trevor-pye-KyaoT3NKN2s-unsplash-_360-270.jpg"
      />
      <AnimateInImage
        width={360}
        height={240}
        src="/pics/veeterzy-sMQiL_2v4vs-unsplash_360-240.jpg"
      />
      <AnimateInImage
        width={360}
        height={240}
        src="/pics/wil-stewart-pHANr-CpbYM-unsplash_360-240.jpg"
      />
    </AnimateAroundCircularPath>
  )
}

export default AnimatedImagesAroundCircularPath
