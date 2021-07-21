import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <div id="sidedrawer"></div>
  </>
}

export default MyApp
