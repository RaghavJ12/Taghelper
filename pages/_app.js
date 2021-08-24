import '../styles/globals.scss'
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import { Provider } from 'next-auth/client'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase'
import Login from '../components/Login';
import Loading from '../components/loading';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      console.log(user.id);
      db.collection('users').doc(user.uid).set({
        name: user.displayName,
        photoURL: user.photoURL,
      },
        { merge: true }
      );
    }
  }, [user])


  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
