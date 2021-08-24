import React from 'react';
import { auth, provider } from '../firebase';
import logo from '../public/images/fb.jpg'
import Image from 'next/image'

export default function Login() {

  const signIn=() =>{
    auth.signInWithPopup(provider).catch(alert).then((result) => {
      console.log(result.user.displayName);
    });
  };

  return (
    <div className="wel" style={{ backgroundColor: '#004e96' }}>      
      <div className="columns" style={{marginTop: '20vh'}}>
        <div className="column is-4 is-offset-4 has-text-centered">
          <div className="card pb-5">
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <div className="fbl">
                  <Image src={logo} width={100} height={100} className="log" />
                </div>
              </div>
            </div>
            <p className="is-size-2 has-text-centered" style={{ color: '#004e96' }}>Welcome to FB Helper</p>
            <br />
            <br />
            <button className="button is-rounded has-text-weight-semibold is-large" id="b1" onClick={signIn}>Login using Facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}