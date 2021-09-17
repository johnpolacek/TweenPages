import Head from "next/head"
import PropTypes from "prop-types"

const DocHead = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={props.url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      {props.imageAlt && (
        <meta property="og:image:alt" content={props.imageAlt} />
      )}
      <meta property="og:url" content={props.url} />
      <meta
        name="twitter:card"
        content={props.imageUrl ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" content={props.twitter} />
      <meta name="twitter:creator" content={props.twitter} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props.imageUrl && (
        <meta property="twitter:image" content={props.imageUrl} />
      )}
      {props.imageAlt && (
        <meta property="twitter:image:alt" content={props.imageAlt} />
      )}
    </Head>
  </>
)

DocHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  twitter: PropTypes.string,
}

export default DocHead
