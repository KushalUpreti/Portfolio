import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <div id="backdrop"></div>
    <div id="sidedrawer"></div>
  </>
}

export default MyApp
