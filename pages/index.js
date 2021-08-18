import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import user1pic from '../public/images/user1.png'
import user2pic from '../public/images/user2.jpg'
import Dashside from '../components/dashside';
import { getSession } from 'next-auth/client';
import Login from '../components/Login';

const data = [
  {
    id: 1,
    fname: 'Amit',
    lname: 'RG',
    type: 'Facebook DM',
    time: '10m',
    short: 'Awesome Product',
    msg: 'Hey there! I probably did one of the bes...',
    pic: user1pic,
    status: 'Online',
    email: 'amit@richpanel.com'
  },
  {
    id: 2,
    fname: 'Hiten',
    lname: 'Saxena',
    type: 'Facebook Post',
    time: '10m',
    short: 'Available in store?',
    msg: 'Hi do you have any T-Shirt available in st...',
    pic: user2pic,
    status: 'Offline',
    email: 'hiten@richpanel.com'
  }
]

export default function Home({ session }) {

  const [user, setuser] = useState(data[0]);
  const [u2, setu2] = useState(data[0]);
  const [col, setcol] = useState('#8a8989');

  useEffect(() => {
    setu2(user);
    if (u2.status == 'Online') {
      setcol('green');
    }
    else {
      setcol('#8a8989');
    }
  });

  if (!session)
    return <Login />;

  else
    return (
      <>
        <Dashside />
        <div className="columns is-gapless is-mobile" style={{ marginLeft: '82px' }}>
          <div className="column is-3">
            <div className="card" style={{ height: '100vh' }}>
              <div className="card p-3" style={{ borderRadius: '0' }}>
                <div className="columns is-gapless mx-2">
                  <div className="column is-1" style={{ color: '#C0C0C0' }}>
                    <i className=" mt-3 fas fa-align-left icon"></i>
                  </div>
                  <div className="column is-size-4 mt-1 has-text-weight-bold">
                    Conversations
                  </div>
                  <div className="column is-2 is-offset-1 mt-2">
                    <button className="redo"><Link href="./inbox"><i className="fas fa-redo-alt icon is-medium px-1 r1" style={{ color: '#8a8989' }}></i></Link></button>
                  </div>
                </div>
              </div>
              <div className="columns is-gapless is-multiline card cbt is-fullwidth" style={{ borderRadius: '0' }}>
                {data.map((n) => {
                  return (
                    <div id="sel" key={n.id} onClick={() => setuser(n)}>
                      <div className="card py-3 px-5 cbb column is-full mr-2" style={{ borderRadius: 0 }}>
                        <div className="columns">
                          <div className="column is-1">
                            <input type="checkbox" />
                          </div>
                          <div className="column is-6">
                            <p className="has-text-weight-bold">{n.fname} {n.lname}</p>
                            <p className="has-text-weight-semibold">{n.type}</p>
                          </div>
                          <div className="column is-1 is-offset-3 has-text-weight-semibold">{n.time}</div>
                        </div>
                        <p style={{ marginTop: '-15px' }}>
                          <p className="has-text-weight-semibold">{n.short}</p>
                          <p className="pr-3" style={{ color: '#8a8989' }}>{n.msg}</p>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="card mid" style={{ height: '100vh' }}>
              <div className="card p-4 cbb" style={{ borderRadius: '0' }}>
                <p className="is-size-4 has-text-weight-bold mx-2">{u2.fname} {u2.lname}</p>
              </div>
              <div style={{ height: '80vh' }}></div>
              <div className="columns">
                <div className="column is-11">
                  <input id="name" className="input is-info mx-5" type="text" required placeholder="Message Hiten Saxena" />
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <div className="card cbb pb-5">
              <div className="columns pt-4 is-multiline">
                <div className="column is-3 is-offset-5">
                  <Image src={u2.pic} className="dp" />
                </div>
                <div className="column is-5 is-offset-4">
                  <p className="is-size-5 has-text-weight-bold has-text-centered" style={{ marginTop: '-20px' }}>{u2.fname} {u2.lname}</p>
                </div>
                <div className="column is-5 is-offset-5">
                  <p className="is-size-6 ml-2" style={{ marginTop: '-20px', color: col }}><i className="fas fa-circle icon is-small pr-2"></i>{u2.status}</p>
                </div>
              </div>
              <div className="columns is-mobile">
                <div className="column is-3 is-offset-3">
                  <button className="button"><i className="fas fa-phone fa-rotate-180 mr-2"></i>Call</button>
                </div>
                <div className="column is-3">
                  <button className="button"><i className="fas fa-user-circle icon mr-2" aria-hidden="true"></i>Profile</button>
                </div>
              </div>
            </div>
            <div className="card m-4 p-4" style={{ border: '1px solid #D3D3D3' }}>
              <p className="has-text-weight-semibold is-size-5 mb-3">Customer Details</p>
              <div className="columns is-mobile is-multiline is-size-6">
                <div className="column is-4 tg">Email</div>
                <div className="column is-8 has-text-right"><p className="has-text-weight-semibold">{u2.email}</p></div>
                <div className="column is-4 tg">First Name</div>
                <div className="column is-8 has-text-right"><p className="has-text-weight-semibold">{u2.fname}</p></div>
                <div className="column is-4 tg">Last Name</div>
                <div className="column is-8 has-text-right"><p className="has-text-weight-semibold">{u2.lname}</p></div>
              </div>
              <a className="vd">View more details</a>
            </div>
          </div>
        </div>
      </>
    )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}