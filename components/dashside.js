import React, { useEffect, useState } from 'react';
import LayoutDash from './dashlay';
import Image from 'next/image';
import logo from '../public/images/fb-w.png'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from '../firebase';
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import axios from "axios";
import graph from 'fb-react-sdk';

export default function Dashside() {

    const [modalOpen, setModalOpen] = useState(false);

    const [user] = useAuthState(auth);
    const [access_token, setaccess_token] = useState("");
    const [pic, setpic] = useState("");
    // console.log(user);

    useEffect(()=>{
        // setaccess_token(user.accessToken);
        setaccess_token("EAARavzQBmdwBAIjyBjDtAqTlxCwswscDuyuaCbD39ZBZBvhH6kw88fCIZAD6d43s7CbvKUHWy3DJ9tpa6VCicdfGi8HYbGq5C8GTlWt2eaWGApZCMZCpddkbu98l2yR8ZBrGAvHUVzkhVFMFsLfJ2RVb87ITzzDVNYw3cKMULlwgR5xHnJXf6UEoPYYKTz3hdw8xwy3HOvV0Tsun6CMZC3oQNTLb6hCkOZA43sZBiOYffh3vMUru6oZCKh");
        graph.setAccessToken(access_token);
        graph.extendAccessToken({
            "client_id":      process.env.FACEBOOK_CLIENT_ID
          , "client_secret":  process.env.FACEBOOK_CLIENT_SECRET
        }, function (err, facebookRes) {
        //    console.log(facebookRes);
        });
    
        graph.get("me?fields=picture{cache_key,height,is_silhouette,url,width}", function (err, res) {
            console.log(res);
            setpic(res?.picture.data.url);
        });
    });


    return (
        <>
            <div className="card has-text-centered" id="s2">
                <div className="sidex py-4"><Image src={logo} height={45} width={50} /></div>

                <LayoutDash />

                <div className="us py-5">
                    <UserAvatar
                        src={pic}
                        onClick={() => setModalOpen(!modalOpen)}
                        className="cp"
                        alt="user3"
                        width={50}
                        height={50} />
                </div>
            </div>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} className="mr">
                <div className="card p-3 mrend" style={{ width: '60%' }}>
                    <div className="modal-header">
                        <div className="modtop columns">
                            <div className="column is-1 is-offset-10">
                                <div
                                    aria-label="Close"
                                    className="close"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    <span aria-hidden={true} style={{ cursor: 'pointer' }}><i className="ml-3"><CloseIcon /></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-mobile is-multiline is-gapless">
                            <div className="column is-4 is-offset-4">
                                <div className="gradient-avatar">
                                    <ShowAvatar className="gradient-avatar__image" src={pic} />
                                </div>
                            </div>
                            <div className="column is-6 is-offset-3 has-text-centered">
                                <p className="has-text-weight-semibold is-size-5 py-2">{user.displayName}</p>
                            </div>
                            <div className="column is-6 is-offset-4 has-text-centered"><p className="is-size-6" style={{ color: 'green', display: 'flex' }}><i className="px-2 pt-1"><FiberManualRecordIcon fontSize="inherit" /></i>Online</p></div>
                        </div>
                    </div>
                    <br />
                    <ModalBody>
                        <p className="has-text-weight-semibold is-size-5 has-text-centered">You want to Log Out?</p>
                    </ModalBody>
                    <br />
                    <ModalFooter>
                        <div className="columns is-mobile">
                            <div className="column is-6 has-text-centered">
                                <button
                                    className="button is-medium"
                                    style={{ minWidth: '8vw' }}
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    Go Back
                                </button>
                            </div>
                            <div className="column is-6 has-text-centered">
                                <button className="button is-medium" id="so" style={{ minWidth: '8vw' }} onClick={() => auth.signOut()}>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </ModalFooter>
                    <br />
                </div>
            </Modal>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//     return {
//         props: {
//             session
//         }
//     }
// }

const UserAvatar = styled(Avatar)`
margin-left: 20px;
`;

const ShowAvatar = styled(Avatar)`
border-radius: 50%;
z-index: 1;
height: 15vh;
width: 7vw;
`;