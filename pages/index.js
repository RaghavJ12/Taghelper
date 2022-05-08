import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import Link from 'next/link';
import Image from 'next/image'
import user1pic from '../public/images/user1.png'
import user2pic from '../public/images/user2.jpg'
import Dashside from '../components/dashside';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components'
import PhoneIcon from '@material-ui/icons/Phone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SubjectIcon from '@material-ui/icons/Subject';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';

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

export default function Home() {
  
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
  // const getPic = () => {
  //   axios.get("https://graph.facebook.com/v11.0/me", {
  //     access_token: ""
  //   }).then(
  //     res => {
  //       // setpic(res.data);
  //       console.log(res.data);
  //     },
  //     error => {
  //       alert(error);
  //     }
  //   );
  // };

  // if (!session)
  //   return <Login />;

  return (
    <Container>
      <Dashside />
      <div className="columns is-gapless is-mobile" style={{ marginLeft: '82px' }}>
        <div className="column is-3">
          <div className="card" style={{ height: '100vh' }}>
            <div className="card p-3" style={{ borderRadius: '0' }}>
              <div className="columns is-gapless mx-2">
                <div className="column is-size-4 mt-1 has-text-weight-bold">
                  <i className="mr-3" style={{ color: '#C0C0C0' }}><SubjectIcon /></i>
                  Conversations
                </div>
                <div className="column is-2 is-offset-1 mt-2">
                  <button className="redo"><Link href="./"><i className="px-1 r1" style={{ color: '#8a8989' }}><RefreshIcon onclick={() => Router.reload(window.location.pathname)} /></i></Link></button>
                </div>
              </div>
            </div>
            <SearchCon>
              <Search className="py-4 px-4">
                <SearchIcon className="" fontSize="small" />
                <SearchInput placeholder="Search in chats" />
              </Search>

            </SearchCon>
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
                <p className="is-size-6" style={{ marginTop: '-20px', color: col, display: 'flex', position: 'sticky' }}><i className="pr-1 pt-1"><FiberManualRecordIcon fontSize="inherit" /></i>{u2.status}</p>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-3 is-offset-3">
                <button className="button bo"><i className="mr-2 pt-2"><PhoneIcon /></i>Call</button>
              </div>
              <div className="column is-3">
                <button className="button bo"><i className="mr-2 pt-2"><PersonIcon /></i>Profile</button>
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
      {/* <div className="button" onClick={getPic} /> */}
    </Container>
  )
}

const Container = styled.div``;
const SearchCon = styled.div`
display: 'flex';
align-items: center;
padding: 5px;
border-radius: 2px;
background-color: rgb(250, 250, 250);
`;
const Search = styled.div`
outline-width: 0;
border-radius: 25px;
border-width: 0;
flex:1;
margin: 5px;
background-color: white;
`;
const SearchInput = styled.input`
outline-width: 0;
border: none;
flex:1;
padding-left: 15px; 
`;