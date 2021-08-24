import React from 'react';
import { Circle } from 'better-react-spinkit';

export default function Loading() {
    return (
        <center style={{display: 'grid', placeitems: 'center', height: '100vh'}}>
            <Circle color="blue" size={60} />
        </center>
    )
}