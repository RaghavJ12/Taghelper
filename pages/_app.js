import '../styles/globals.scss'
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <Provider session={pageProps.session}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </Provider>
    </>
  )
}

export default MyApp
